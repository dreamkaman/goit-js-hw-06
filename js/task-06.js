const inputEl = document.querySelector('input');

inputEl.classList.add('validation-input');

const onInputBlur = function () {

    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
};

inputEl.addEventListener('blur', onInputBlur);
