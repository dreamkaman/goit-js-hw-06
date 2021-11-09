const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = ingredients.map(ingredient => {
  let elementLi = document.createElement('li');
  elementLi.textContent = ingredient;
  elementLi.className = "item";
  
  return elementLi;
}
);

console.log(ingredientsList);

const pageUl = document.querySelector('ul');

pageUl.append(...ingredientsList);


// for (let ingredient of ingredients) {
//   elementLi = document.createElement('li');
//   elementLi.textContent = ingredient;
//   elementLi.className = "item";
//   console.log(elementLi);
// }