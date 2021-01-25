const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handelSetName = event => {
  nameOutput.textContent = event.target.value
    ? event.target.value
    : 'незнакомец';
};
nameInput.addEventListener('input', handelSetName);
