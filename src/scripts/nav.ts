import { debounce, throttle } from 'throttle-debounce'


export default () => {
  let $nav = document.getElementById('nav')

  if (!$nav) {
    return
  }

  let visible = false

  const show = () => {
    if (visible) {
      return
    }
    visible = true
    $nav?.style.setProperty('--transform', 'translate(-50%, 0)')
  }

  const hide = () => {
    if (!visible) {
      return
    }
    visible = false
    $nav?.style.setProperty('--transform', 'translate(-50%, -4rem)')
  }

  const set = () => {
    if (window.scrollY < (window.innerHeight / 1.5) ) {
      hide()
    } else {
      show()
    }
  }

  set()
  window.addEventListener('scroll', throttle(300, set))
  window.addEventListener('resize', debounce(1000, set))
}

