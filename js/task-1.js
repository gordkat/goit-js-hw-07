const categoriesRef = document.querySelector('#categories');
const categoriesArr = categoriesRef.querySelectorAll('.item');
const messageCategories = `В списке ${categoriesArr.length} категории.`;
console.log(messageCategories);

categoriesArr.forEach(item => {
  const titleRef = item.querySelector('h2');
  const titleText = titleRef.textContent;
  const quantityElements = item.querySelectorAll('li').length;
  const messageElements = `Категория: ${titleText}
Количество элементов: ${quantityElements}`;
  console.log(messageElements);
});
