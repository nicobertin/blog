import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="flash"
export default class extends Controller {
  connect() {
    document.addEventListener("turbo:load", function() {
      var toastElList = [].slice.call(document.querySelectorAll('.toast'));
      var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl, {autohide: true, delay: 3000});
      });
      toastList.forEach(toast => toast.show());
    });
  }

}
