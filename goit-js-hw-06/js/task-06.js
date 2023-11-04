const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function () {
  if (validationInput.dataset.length === 6) {
    validationInput.classList.toggle("valid");
  } else {
    validationInput.classList.toggle("invalid");
  }
});
