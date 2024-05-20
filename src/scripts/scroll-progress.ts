import { debounce, throttle } from 'throttle-debounce'

export default () => {
  let $progress = document.getElementById('progress')

  if (!$progress) {
    return
  }

  let scrollMax = 0

  const setProgress = () => {
    const progress = Math.round((document.documentElement.scrollTop / scrollMax) * 100)
    $progress?.style.setProperty('--width', `${progress}%`)
  }

  const setScrollMax = () => {
    scrollMax = document.documentElement.offsetHeight - document.documentElement.clientHeight
  }

  const setup = () => {
    setScrollMax()
    setProgress()
  }

  setup()
  window.addEventListener('scroll', throttle(300, setProgress))
  window.addEventListener('resize', debounce(1000, setup))
}