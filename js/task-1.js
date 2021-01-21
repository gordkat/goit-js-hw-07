const categoriesRef = document.querySelector('#categories');
const categoriesArr = categoriesRef.querySelectorAll('.item');
let message = `В списке ${categoriesArr.length} категории.`;
console.log(message);

categoriesArr.forEach(item => {
  const titleRef = item.querySelector('h2');
  const titleText = titleRef.textContent;
  const quantityElements = item.querySelectorAll('li').length;
  message = `Категория: ${titleText}
Количество элементов: ${quantityElements}`;
  console.log(message);
});
