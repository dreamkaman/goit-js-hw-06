function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

};

const changeColorBtn = document.querySelector('button[type="button"]');

const spanEl = document.querySelector('span');

const bodyEl = document.querySelector('body');

const onChangeColorBtnClick = function () {
  
  let myColor = getRandomHexColor();

  spanEl.textContent = myColor;

  bodyEl.style.backgroundColor = myColor;

}


changeColorBtn.addEventListener('click', onChangeColorBtnClick);
