const userNameValue = document.querySelector('#name-input');
const userName = document.querySelector("#name-output");
userNameValue.addEventListener('input', changeUserName);
function changeUserName(event){
    if(event.currentTarget.value === ''.trim() ){
        return userName.textContent = "Anonymous"
    }      return userName.textContent = event.currentTarget.value
}
