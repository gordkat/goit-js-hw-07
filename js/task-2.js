const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientTagArr = ingredients.map(ingredient => {
  const ingredientTagRef = document.createElement('li');
  ingredientTagRef.textContent = ingredient;
  return ingredientTagRef;
});

const ingrdientsRef = document.querySelector('#ingredients');
ingrdientsRef.append(...ingredientTagArr);
