const spanEl = document.querySelector('span');

const progressBarBtn = document.querySelector('input[id="font-size-control"]');

const onProgressBarBtnInput = function () {
    
    spanEl.style.fontSize = progressBarBtn.value + "px";
    
};

progressBarBtn.addEventListener('input',onProgressBarBtnInput);