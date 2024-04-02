const inputField = document.querySelector('input[type="text"]');
const inputDisplay = document.querySelector('#duplicateField');
const butonSubmit = document.querySelector('button[type="submit"]')

inputField.addEventListener('input',
event=>{
    inputDisplay.textContent = inputField.value;
})

butonSubmit.addEventListener('click',
event=>{
    event.preventDefault();
    console.log(inputField.value);
    inputField.value='';
    inputDisplay.textContent='';
})