import { debounce, throttle } from 'throttle-debounce'

export default () => {
  let $progress = document.getElementById('progress')

  if (!$progress) {
    return
  }

  let progress = 0

  const setProgress = () => {
    const scrollMax = document.documentElement.offsetHeight - document.documentElement.clientHeight
    progress = document.documentElement.scrollTop / scrollMax
    $progress?.style.setProperty('--width', `${Math.round(progress * 100)}%`)
  }

  window.addEventListener('load', setProgress)
  window.addEventListener('scroll', throttle(300, setProgress))
  window.addEventListener('resize', debounce(1000, setProgress))
}