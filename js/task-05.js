const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

const onbtnInputInput = function () {
    if (inputEl.value.length > 0) {
        spanEl.textContent = inputEl.value;
    } else {
        spanEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener('input', onbtnInputInput);