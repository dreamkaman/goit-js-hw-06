const inputEl = document.querySelector('input');

const onInputBlur = function () {
    if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
};

inputEl.addEventListener('blur', onInputBlur);
