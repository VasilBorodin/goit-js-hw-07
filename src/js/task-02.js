const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredientsEl = document.querySelector("ul#ingredients");
const arrayLi = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  return liEl;
});
ulIngredientsEl.append(...arrayLi);
