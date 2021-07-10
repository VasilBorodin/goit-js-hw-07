const categorsEl = document.querySelectorAll(".item");
const categorAmount = categorsEl.length;
console.log(`В списке ${categorAmount} категории.`);
categorsEl.forEach((category) => {
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});
