import { debounce } from 'throttle-debounce'

interface Step {
  el: HTMLElement;
  top: number;
  bottom: number;
  start: number;
  end: number;
}

export default () => {
  const $steps = <HTMLElement[]>[...document.querySelectorAll('[data-step]')]

  if (!$steps.length) {
    return
  }

  let scrollY: number
  let scrollYBottom: number
  let steps: Step[]

  const getSteps = () => {
    const $steps = <HTMLElement[]>[...document.querySelectorAll('[data-step]')]
    return $steps.map(($step: HTMLElement) => {
      const $items = <HTMLElement[]>[...$step.querySelectorAll('.portfolio-item')]
      const itemWidths = $items.map($item => $item.offsetWidth)
      const width = itemWidths.reduce((total: number, width: number): number => total + width, 0)
      const start = (document.documentElement.clientWidth / 2) - (itemWidths[0] / 2)
      const end = width - itemWidths[itemWidths.length - 1]
      return {
        el: $step,
        top: $step.offsetTop,
        bottom: $step.offsetTop + $step.offsetHeight,
        start,
        end,
      }
    })
  }

  const init = () => {
    scrollY = document.documentElement.scrollTop
    scrollYBottom = document.documentElement.scrollTop + window.innerHeight
    steps = getSteps()
    setProgress()
  }

  const progressToPixel = (percent: number, step: Step) => {
    if (!percent) {
      return `${step.start}px`;
    } else if (percent >= 100) {
      return `${step.start - step.end}px`
    }

    return `${step.start - Math.ceil(percent * step.end)}px`
  }

  const setProgress = () => {
    scrollY = document.documentElement.scrollTop
    scrollYBottom = scrollY + window.innerHeight
    steps.forEach(step => {
      let progress : number
      if (scrollY < step.top) {
        progress = 0
      } else if (scrollYBottom > step.bottom) {
        progress = 1
      } else {
        progress = (scrollY - step.top) / (step.bottom - step.top - window.innerHeight)
      }
      step.el.style.setProperty(
        '--progress',
        progressToPixel(progress, step)
      )
    })
  }

  init()
  window.addEventListener('scroll', setProgress)
  window.addEventListener('resize', debounce(1000, init))
}