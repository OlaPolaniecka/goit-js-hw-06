const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ElementOne = document.createElement("li");
ElementOne.textContent = ingredients[0];
ElementOne.classList.add("item");
list.append(ElementOne);
console.log(ElementOne);

const ElementTwo = document.createElement("li");
ElementTwo.textContent = ingredients[1];
ElementTwo.classList.add("item");
list.append(ElementTwo);
console.log(ElementTwo);

const ElementThree = document.createElement("li");
ElementThree.textContent = ingredients[2];
ElementThree.classList.add("item");
list.append(ElementThree);
console.log(ElementThree);

const ElementFour = document.createElement("li");
ElementFour.textContent = ingredients[3];
ElementFour.classList.add("item");
list.append(ElementFour);
console.log(ElementFour);

const ElementFive = document.createElement("li");
ElementFive.textContent = ingredients[4];
ElementFive.classList.add("item");
list.append(ElementFive);
console.log(ElementFive);

const ElementSix = document.createElement("li");
ElementSix.textContent = ingredients[5];
ElementSix.classList.add("item");
list.append(ElementSix);
console.log(ElementSix);
