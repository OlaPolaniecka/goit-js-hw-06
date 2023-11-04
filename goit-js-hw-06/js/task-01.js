const numberOfCategories = document.querySelectorAll("h2");
console.log(`Number of categories: ${numberOfCategories.length}`);

const totalitems = document.querySelectorAll(".item");
totalitems.forEach((item) => {
  const titleItem = item.firstElementChild.textContent;
  const totalPositionOfItem = item.lastElementChild.children.length;

  console.log("Category:", titleItem);
  console.log("Elements:", totalPositionOfItem);
});
