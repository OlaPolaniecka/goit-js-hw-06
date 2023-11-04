let counterValue = 0;

const value = document.querySelector("#value");

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});

const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});
