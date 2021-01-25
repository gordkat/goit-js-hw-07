const inputForValidation = document.querySelector('#validation-input');
const inputLength = Number(inputForValidation.dataset.length);

const handelValidation = event => {
  if (event.target.value.length === inputLength) {
    inputForValidation.setAttribute('class', 'valid');
    return;
  }
  inputForValidation.setAttribute('class', 'invalid');
};
inputForValidation.addEventListener('change', handelValidation);
