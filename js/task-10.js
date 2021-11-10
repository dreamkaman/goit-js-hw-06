function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesEl = document.querySelector('div[id="boxes"]');

const inputEl = document.querySelector('input[type="number"]');

const btnCreate = document.querySelector('button[data-create]');

const btnDestroy = document.querySelector('button[data-destroy]');


const onBtnCreateClick = function () {

  const myCount = inputEl.value;

  inputEl.value = 0;

  const divArr = [];

  for (let i = 0; i <= Number(myCount) - 1; i += 1) {
    
    divArr.push(`<div style="width: ${30+i*10}px; height: ${30+i*10}px; background-color: ${getRandomHexColor()};"></div>`);
  }

  const markup = divArr.join('');

  divBoxesEl.insertAdjacentHTML("afterbegin", markup);

};

const onBtnDestroyClick = function () {

  divBoxesEl.innerHTML = "";

};

btnCreate.addEventListener('click', onBtnCreateClick);

btnDestroy.addEventListener('click', onBtnDestroyClick);


