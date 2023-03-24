const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients')
const item = document.createElement('li')
item.textContent = ingredients[0]
item.classList.add('item')
const item2 = document.createElement('li')
item2.textContent = ingredients[1]
item2.classList.add('item')
const item3 = document.createElement('li')
item3.textContent = ingredients[2]
item3.classList.add('item')
const item4 = document.createElement('li')
item4.textContent = ingredients[3]
item4.classList.add('item')
const item5 = document.createElement('li')
item5.textContent = ingredients[4]
item5.classList.add('item')
const item6 = document.createElement('li')
item6.textContent = ingredients[5]
item6.classList.add('item')
listOfIngredients.append(item,item2,item3,item4,item5,item6)