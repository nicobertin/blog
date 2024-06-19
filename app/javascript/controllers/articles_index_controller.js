import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="articles-index"
export default class extends Controller {
  static targets = ["categoryButton", "allCategoriesButton"]

  connect() {
    this.handleAllCategoriesClick = this.handleAllCategoriesClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    
    this.categoryButtonTargets.forEach(button => {
      button.addEventListener('click', this.handleCategoryClick)
    })
    if (this.hasAllCategoriesButtonTarget) {
      this.allCategoriesButtonTarget.addEventListener('click', this.handleAllCategoriesClick)
    }
  }

  disconnect() {
    this.categoryButtonTargets.forEach(button => {
      button.removeEventListener('click', this.handleCategoryClick)
    })
    if (this.hasAllCategoriesButtonTarget) {
      this.allCategoriesButtonTarget.removeEventListener('click', this.handleAllCategoriesClick)
    }
  }

  handleCategoryClick(event) {
    const button = event.currentTarget;
    if (button.classList.contains('selected-category')) {
      event.preventDefault()
      button.classList.remove('selected-category')
      if (this.hasAllCategoriesButtonTarget) {
        this.allCategoriesButtonTarget.click()
      }
    } else {
      this.categoryButtonTargets.forEach(btn => btn.classList.remove('selected-category'))
      if (this.hasAllCategoriesButtonTarget) {
        this.allCategoriesButtonTarget.classList.remove('selected-category')
      }
      button.classList.add('selected-category')
    }
  }

  handleAllCategoriesClick() {
    this.categoryButtonTargets.forEach(btn => btn.classList.remove('selected-category'))
    if (this.hasAllCategoriesButtonTarget) {
      this.allCategoriesButtonTarget.classList.add('selected-category')
    }
  }
}
