const inputRef = document.querySelector('#controls input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let numberOfBoxes = 0;
let boxes = [];
let size = 30;

const randomColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

/* const createBoxes = amount => {
  for (let i = 1, size = 30; i <= amount; i += 1, size += 10) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = randomColorRGB();
    boxes.push(box);
  }
  boxesRef.append(...boxes);
}; */

const createBoxes = amount => {
  const boxesEmpty = [...new Array(amount)];
  boxes = boxesEmpty.reduce((acc, box, i) => {
    box = document.createElement('div');
    box.style.width = size + i * 10 + 'px';
    box.style.height = size + i * 10 + 'px';
    box.style.backgroundColor = randomColorRGB();
    acc.push(box);
    return acc;
  }, []);
  boxesRef.append(...boxes);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  boxes = [];
  size = 30;
};

const handelSaveNumber = event => {
  if (event.target.value > 0) numberOfBoxes = Number(event.target.value);
};

const handelCreateBoxes = () => {
  createBoxes(numberOfBoxes);
  inputRef.value = '';
};

const handelDestroyBoxes = () => {
  destroyBoxes();
  inputRef.value = '';
};

inputRef.addEventListener('input', handelSaveNumber);
btnRenderRef.addEventListener('click', handelCreateBoxes);
btnDestroyRef.addEventListener('click', handelDestroyBoxes);
