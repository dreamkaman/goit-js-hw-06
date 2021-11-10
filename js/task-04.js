let counterValue = 0;

let btnIncrement = document.querySelector('button[data-action="increment"]');

let btnDecrement = document.querySelector('button[data-action="decrement"]');

let spanEl = document.querySelector('span');



console.log(spanEl.textContent);

const onIncrementClick = function () {

    counterValue += 1;

    spanEl.textContent = counterValue;
    
};

const onDecrementClick = function () {
    
    counterValue -= 1;

    spanEl.textContent = counterValue;
}

btnIncrement.addEventListener('click', onIncrementClick);

btnDecrement.addEventListener('click', onDecrementClick);
