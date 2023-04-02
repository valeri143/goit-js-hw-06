const userSymbols = document.querySelector('#validation-input');
const valueNumber = Number(userSymbols.dataset.length)
userSymbols.addEventListener('blur', validationBord);
function validationBord(event){
if(event.currentTarget.value.trim().length !== valueNumber){
    return userSymbols.classList.add('invalid')
 }  else {
 userSymbols.classList.remove('invalid')
  return userSymbols.classList.add('valid')
} 
}