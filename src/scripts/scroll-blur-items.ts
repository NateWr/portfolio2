export default () => {

  const SELECTOR = '[data-blur]'

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const target = <HTMLElement>entry.target
      target.dataset.blur = entry.isIntersecting ? 'false' : 'true'
    })
  }

  const items = <HTMLElement[]>[...document.querySelectorAll(SELECTOR)]
  const ob = new IntersectionObserver(callback, {threshold: 0.5})
  items.forEach(item => ob.observe(item))
}