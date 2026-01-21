import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GammaCorrectionShader, HalftonePass, RenderPass } from 'three/examples/jsm/Addons.js';

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

  window.addEventListener('resize', () => {
    sizes.width = canvas.clientWidth
    sizes.height = canvas.clientWidth
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

    camera.aspect = sizes.width / sizes.height
    camera.left = -size * (sizes.width / sizes.height)
    camera.right = size * (sizes.width / sizes.height)
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height, false)
    renderer.setPixelRatio(sizes.pixelRatio)
    composer.setSize(sizes.width, sizes.height)
  })

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
    new THREE.MeshBasicMaterial({ map: profileDiffuseMap, transparent: true })
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

  const params = {
    shape: 1,
    radius: 7.0,
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

  // const gammaCorrection = new ShaderPass(GammaCorrectionShader)
  // composer.addPass(gammaCorrection)

  const tick = () => {
    renderer.render(scene, camera)
    composer.render()

    window.requestAnimationFrame(tick)
  }

  tick()
}
