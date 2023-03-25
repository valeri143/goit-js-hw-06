const inputRange = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
const min = inputRange.min;
const max = inputRange.max;  
inputRange.addEventListener('input', changeFontSize)
function changeFontSize(event){
    event.preventDefault()
 text.style.fontSize = `${event.currentTarget.value}px`
}