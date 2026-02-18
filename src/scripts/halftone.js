import { debounce } from 'throttle-debounce'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass, TexturePass } from 'three/examples/jsm/Addons.js';
import { HalftonePass } from '../shaders/HalftonePass';

export default () => {
  const canvas = document.querySelector('canvas#webgl-profile')

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


  const profileDiffuseMap = new THREE.TextureLoader().load('/profile.png')
  profileDiffuseMap.colorSpace = THREE.LinearSRGBColorSpace

  const profile = new THREE.Mesh(
    new THREE.PlaneGeometry(size * 2, size * 2),
    new THREE.MeshBasicMaterial({ map: profileDiffuseMap })
  )
  scene.add(profile)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.setSize(sizes.width, sizes.height, false)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const getMaskFile = () => window.innerWidth > 1280 ? 'mask-top-left-1.png' : 'mask-top-1.png'
  let maskFile = getMaskFile()

  const getMaskTexture = (maskFile) => {
    const texture = new THREE.TextureLoader().load(maskFile)
    texture.colorSpace = THREE.LinearSRGBColorSpace
    texture.premultiplyAlpha = true
    return texture
  }
  const maskTexture = getMaskTexture(maskFile)
  const maskPass = new TexturePass(maskTexture, 0.9999)
  composer.addPass(maskPass)

  const getRadius = () => {
    const minRadius = 10.0
    const maxRadius = 12.0
    const posInRange = mapNumToRange(sizes.width, 360, 1200)
    return minRadius + ((maxRadius - minRadius) * posInRange)
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

    const newMaskFile = getMaskFile()
    if (maskFile !== newMaskFile) {
      maskFile = newMaskFile
      const newMaskTexture = getMaskTexture(maskFile)
      maskPass.map = newMaskTexture
    }

    halftonePass.uniforms['radius'].value = getRadius()
    halftonePass.material.uniforms['radius'].value = getRadius()

    camera.aspect = sizes.width / sizes.height
    camera.left = -size * (sizes.width / sizes.height)
    camera.right = size * (sizes.width / sizes.height)
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height, false)
    renderer.setPixelRatio(sizes.pixelRatio)
    composer.setSize(sizes.width, sizes.height)
  }

  window.addEventListener('resize', debounce(500, resize))

  const tick = () => {
    renderer.render(scene, camera)
    composer.render()

    window.requestAnimationFrame(tick)
  }

  tick()
}
