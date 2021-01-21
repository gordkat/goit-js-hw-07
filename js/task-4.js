const valueRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector(
  'button[data-action = "decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action = "increment"]',
);

let counterValue = Number(valueRef.textContent);
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);
