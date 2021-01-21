const inputRef = document.querySelector('#controls input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let numberOfBoxes = 0;
let boxes;

const randomColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const createBoxes = amount => {
  for (let i = 1, size = 30; i <= amount; i += 1, size += 10) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = randomColorRGB();
    boxes.push(box);
  }
  boxesRef.append(...boxes);
};

const destroyBoxes = () => {
  boxes.forEach(box => box.remove());
};

const handelSaveNumber = event => {
  numberOfBoxes = event.target.value;
};

const handelCreateBoxes = () => {
  boxes = [];
  createBoxes(numberOfBoxes);
};

const handelDestroyBoxes = () => {
  destroyBoxes();
  inputRef.value = '';
  boxes = [];
};

inputRef.addEventListener('input', handelSaveNumber);
btnRenderRef.addEventListener('click', handelCreateBoxes);
btnDestroyRef.addEventListener('click', handelDestroyBoxes);
