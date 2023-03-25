
const btnChangeColor = document.querySelector('.change-color')
const bodyBackground = document.querySelector("body")
const nameOffColor = document.querySelector('.color')
btnChangeColor.addEventListener('click',onChangeColor)
function onChangeColor(event){
bodyBackground.style.backgroundColor = getRandomHexColor()
nameOffColor.textContent =bodyBackground.style.backgroundColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
