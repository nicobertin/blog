import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="articles-index"
export default class extends Controller {
  static targets = ["categoryButton", "allCategoriesButton"]

  connect() {
    this.categoryButtonTargets.forEach(button => {
      button.addEventListener('click', this.handleCategoryClick.bind(this, button))
    })
    this.allCategoriesButtonTarget.addEventListener('click', this.handleAllCategoriesClick.bind(this))
  }

  handleCategoryClick(button, event) {
    if (button.classList.contains('selected-category')) {
      event.preventDefault()
      button.classList.remove('selected-category')
      this.allCategoriesButtonTarget.click()
    } else {
      this.categoryButtonTargets.forEach(btn => btn.classList.remove('selected-category'))
      this.allCategoriesButtonTarget.classList.remove('selected-category')
      button.classList.add('selected-category')
    }
  }

  handleAllCategoriesClick() {
    this.categoryButtonTargets.forEach(btn => btn.classList.remove('selected-category'))
    this.allCategoriesButtonTarget.classList.add('selected-category')
  }
}
