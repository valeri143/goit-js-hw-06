function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const refs ={
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  inputNumber: document.querySelector('input'),
  divBoxes: document.querySelector('#boxes')
}
refs.btnCreate.addEventListener('click', onCreate);
refs.btnDestroy.addEventListener('click', onDestroy);

function onCreate(evt){
 let amount = refs.inputNumber.value;
 if(!amount || amount == 0){
  return alert('Please input a value')
 } 
 if(amount > 100){
  amount = 100;
 }
 refs.divBoxes.innerHTML = '';
 const divTree = createBoxes(amount);
refs.divBoxes.insertAdjacentHTML('beforeend', [...divTree].join(''))
}
function createBoxes(amount){
  let markup =[];
  for (let i = 0; i < amount; i+=1) {
    markup.push(`<div style="background-color:${getRandomHexColor()}; width:${10*i + 30}px; height: ${10*i + 30}px"></div>`)
    
  }
  return markup;
}

function onDestroy(evt){
  if(refs.divBoxes.innerHTML){
    refs.divBoxes.innerHTML = '';
    refs.inputNumber.value = 1;
  }
}