function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesEl = document.querySelector('div[id="boxes"]');

const inputEl = document.querySelector('input[type="number"]');

const btnCreate = document.querySelector('button[data-create]');

const btnDestroy = document.querySelector('button[data-destroy]');

let currentCount = 30;

const onBtnCreateClick = function () {

  const myCount = inputEl.value;

  inputEl.value = 0;

  const divArr = [];

  for (let i = 1; i <= Number(myCount); i += 1) {

    divArr.push(`<div style="width: ${currentCount}px; height: ${currentCount}px; background-color: ${getRandomHexColor()};"></div>`);
    
    currentCount = currentCount + 10;
  }

  const markup = divArr.join('');

  divBoxesEl.insertAdjacentHTML("beforeend", markup);

};

const onBtnDestroyClick = function () {

  divBoxesEl.innerHTML = "";

  currentCount = 30;

};

btnCreate.addEventListener('click', onBtnCreateClick);

btnDestroy.addEventListener('click', onBtnDestroyClick);


