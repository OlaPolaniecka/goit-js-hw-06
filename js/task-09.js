function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
const span = document.querySelector(".color");

changeColor.addEventListener("click", (event) => {
  event.preventDefault();
  colorBody.style.backgroundColor = getRandomHexColor();
  span.textContent = colorBody.style.backgroundColor;
});
