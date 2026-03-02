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
    progress = Math.round(progress * 100)
    // On some screens, the scroll will never quite reach 100
    if (progress > 97) {
      progress = 100
    }
    $progress?.style.setProperty('--width', `${progress}%`)
  }

  window.addEventListener('load', setProgress)
  window.addEventListener('scroll', throttle(300, setProgress))
  window.addEventListener('resize', debounce(1000, setProgress))
}