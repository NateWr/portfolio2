import { debounce } from 'throttle-debounce'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass, TexturePass } from 'three/examples/jsm/Addons.js';
import { HalftonePass } from '../shaders/HalftonePass';

const ALL_FILES_LOADED_COUNT = 2

const getMaskFile = (masks) => {
  return masks.reduce(
    (current, m) => {
      const parts = m.split(':')
      if (parts.length > 1 && window.innerWidth >= parseInt(parts[1], 10)) {
        return parts[0]
      } else if (parts.length === 1) {
        return parts[0]
      }
      return current
    },
    '',
  )
}

const init = (canvas) => {
  const image = canvas.dataset.halftoneImage
  const mask = canvas.dataset.halftoneMask
  if (!image || !mask) {
    return
  }

  let filesLoaded = 0

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#ffffff')

  const size = 6;
  const sizes = {
    width: canvas.clientWidth,
    height: canvas.clientWidth,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
  }

  const aspectRatio = sizes.width / sizes.height
  const camera = new THREE.OrthographicCamera(
      -size * aspectRatio,
      size * aspectRatio,
      size,
      -size,
      0.1,
      100
  )
  camera.position.z = 100

  const profileDiffuseMap = new THREE.TextureLoader().load(image, () => filesLoaded += 1)
  profileDiffuseMap.colorSpace = THREE.LinearSRGBColorSpace

  const profile = new THREE.Mesh(
    new THREE.PlaneGeometry(size * 2, size * 2),
    new THREE.MeshBasicMaterial({ map: profileDiffuseMap })
  )
  scene.add(profile)

  const coverMaterial = new THREE.MeshBasicMaterial({ color: 'black', opacity: 1.0, transparent: true })
  const cover = new THREE.Mesh(
    new THREE.PlaneGeometry(size * 2, size * 2),
    coverMaterial
  )
  cover.position.z = 1
  scene.add(cover)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.setSize(sizes.width, sizes.height, false)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const masks = mask.split(',')
  let maskFile = getMaskFile(masks)

  const getMaskTexture = (maskFile) => {
    const texture = new THREE.TextureLoader().load(maskFile, () => filesLoaded += 1)
    texture.colorSpace = THREE.LinearSRGBColorSpace
    texture.premultiplyAlpha = true
    return texture
  }
  const maskTexture = getMaskTexture(maskFile)
  const maskPass = new TexturePass(maskTexture, 0.9999)
  composer.addPass(maskPass)

  const getRadius = () => {
    const minRadius = 6
    const maxRadius = 30
    const posInRange = mapNumToRange(sizes.width, 360, 2400)
    const r = minRadius + ((maxRadius - minRadius) * posInRange)
    return r * sizes.pixelRatio
  }

  /** Convert number in range to 0.0-1.0 */
  const mapNumToRange = (num, min, max) => {
    return Math.min(1.0, Math.max(0, ((num - min) * (1.0 - 0.0)) / (max - min) + 0.0));
  }

  const params = {
    shape: 5,
    radius: getRadius(),
    rotateR: Math.PI / 12 * -1,
    rotateB: Math.PI / 12 * -1,
    rotateG: Math.PI / 12 * -1,
    scatter: 0.1,
    blending: 1,
    blendingMode: 1,
    greyscale: false,
    disable: false
  }
  const halftonePass = new HalftonePass(params)
  composer.addPass(halftonePass)

  const resize = () => {
    sizes.width = canvas.clientWidth
    sizes.height = canvas.clientWidth
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

    const newMaskFile = getMaskFile(masks)
    if (maskFile !== newMaskFile) {
      maskFile = newMaskFile
      filesLoaded -= 1
      const newMaskTexture = getMaskTexture(maskFile)
      maskPass.map = newMaskTexture
    }

    const radius = getRadius()
    halftonePass.uniforms['radius'].value = radius
    halftonePass.material.uniforms['radius'].value = radius

    camera.aspect = sizes.width / sizes.height
    camera.left = -size * (sizes.width / sizes.height)
    camera.right = size * (sizes.width / sizes.height)
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height, false)
    renderer.setPixelRatio(sizes.pixelRatio)
    composer.setSize(sizes.width, sizes.height)
    composer.setPixelRatio(sizes.pixelRatio)
  }

  window.addEventListener('resize', debounce(500, resize))

  const clock = new THREE.Clock()

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  let startTime = null

  const tick = () => {
    if (filesLoaded >= ALL_FILES_LOADED_COUNT) {
      if (!startTime) {
        startTime = clock.getElapsedTime()
      }
      const elapsedTime = clock.getElapsedTime() - startTime

      coverMaterial.opacity = Math.max(0, (1.0 - easeOutCubic(elapsedTime * 0.3)))

      renderer.render(scene, camera)
      composer.render()
    }

    window.requestAnimationFrame(tick)
  }

  tick()
}

export default () => {
  const canvases = [...document.querySelectorAll('canvas[data-halftone-image]')]
  canvases.forEach(init)
}
