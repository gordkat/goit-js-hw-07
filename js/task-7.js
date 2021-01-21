const inputFontSize = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = inputFontSize.value + 'px';

const handelChangeFontSize = event => {
  textRef.style.fontSize = event.target.value + 'px';
};

inputFontSize.addEventListener('input', handelChangeFontSize);
