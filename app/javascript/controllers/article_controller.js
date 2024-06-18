import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="article"
export default class extends Controller {
  static targets = ["content", "index"]

  connect() {
    this.buildIndex()
    this.updateActiveLinks()
    window.addEventListener('scroll', this.updateActiveLinks.bind(this))
  }

  disconnect() {
    window.removeEventListener('scroll', this.updateActiveLinks.bind(this))
  }

  buildIndex() {
    const content = this.contentTarget
    const indexContainer = this.indexTarget
    indexContainer.innerHTML = ''

    const headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6")
    if (headings.length === 0) return

    let indexContent = "<ul>"

    headings.forEach((heading, index) => {
      const id = "heading-" + index
      heading.setAttribute("id", id)
      indexContent += `<li><a href="#${id}" data-id="${id}">${heading.innerText}</a></li>`
    })

    indexContent += "</ul>"
    indexContainer.innerHTML = indexContent

    // Smooth scroll to heading on click
    indexContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', this.scrollToHeading.bind(this))
    })
  }

  scrollToHeading(event) {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('data-id')
    const targetElement = document.getElementById(targetId)
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  updateActiveLinks() {
    const indexContainer = this.indexTarget
    const links = indexContainer.querySelectorAll('a')
    links.forEach(link => link.classList.remove('active'))

    const headings = this.contentTarget.querySelectorAll("h1, h2, h3, h4, h5, h6")

    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect()
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        const currentHeadingId = heading.getAttribute('id')
        const link = indexContainer.querySelector(`a[data-id='${currentHeadingId}']`)
        if (link) {
          link.classList.add('active')
        }
      }
    })
  }

  share(event) {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Echa un vistazo a este artículo:',
        url: window.location.href
      }).then(() => {
        console.log('¡Artículo compartido exitosamente!');
      }).catch((error) => {
        console.error('Error al compartir:', error);
      });
    } else {
      alert('El API de Web Share no es soportado en este navegador.');
    }
  }
}
