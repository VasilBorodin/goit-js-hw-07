const categoriesListItemRef = categoriesListRef.querySelectorAll(".item");
categoriesListItemRef.forEach((category) => {
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});
