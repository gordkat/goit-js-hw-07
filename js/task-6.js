const inputForValidation = document.querySelector('#validation-input');
const inputLength = Number(inputForValidation.dataset.length);

const handelValidation = event => {
  if (event.target.value.length === inputLength) {
    inputForValidation.classList.add('valid');
    return;
  }
  inputForValidation.classList.add('invalid');
};

const handelClearBorder = () => {
  if (inputForValidation.classList.contains('invalid')) {
    inputForValidation.classList.remove('invalid');
    return;
  }
  if (inputForValidation.classList.contains('valid')) {
    inputForValidation.classList.remove('valid');
    return;
  }
};

inputForValidation.addEventListener('blur', handelValidation);
inputForValidation.addEventListener('focus', handelClearBorder);
