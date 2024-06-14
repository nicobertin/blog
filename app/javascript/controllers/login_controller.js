import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="login"
export default class extends Controller {
 
  toggleLoginPasswordVisibility(event) {
    var field = document.getElementById(event.currentTarget.dataset.loginTarget);
    var element = event.currentTarget;
    if (field.type === "password") {
      field.type = "text";
      element.textContent = "visibility";
    } else {
      field.type = "password";
      element.textContent = "visibility_off";
    }
  }
}
