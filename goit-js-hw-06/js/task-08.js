const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Proszę uzupełnić wszystkie pola");
  }
  console.log({ email: email.value, password: password.value });
  registerForm.reset();
}
