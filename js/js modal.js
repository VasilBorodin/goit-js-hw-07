const categoriesListArrRef = categoriesListRef.children;
const arrRef = Array.from(categoriesListArrRef);
arrRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`);
});
