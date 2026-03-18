
export default () => {
  document.addEventListener('DOMContentLoaded', () => {

    const lightbox = document.getElementById('lightbox')
    const close = lightbox?.querySelector('button')
    if (!lightbox || !close) {
      return
    }

    const show = (src: string) => {
      removeImage()
      const img = document.createElement('img')
      img.src = src
      img.className = 'max-h-screen max-w-screen'
      lightbox.append(img)
      lightbox.className = lightbox.className
        .replace('opacity-0', 'opacity-100')
        .replace('scale-0', 'scale-100')
        .replace(' -z-50', ' z-50')
    }

    const hide = () => {
      lightbox.className = lightbox.className
        .replace('opacity-100', 'opacity-0')
        .replace('scale-100', 'scale-0')
        .replace(' z-50', ' -z-50')
        setTimeout(removeImage, 300)
    }

    const removeImage = () => {
      lightbox.querySelector('img')?.remove()
    }

    lightbox.addEventListener('click', hide)
    close.addEventListener('click', hide)

    const images : HTMLAnchorElement[] = [...document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox="true"]')]
    images.forEach(image => {
      if (!image.href) {
        return
      }
      image.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        show(image.href)
      })
    })
  })
}