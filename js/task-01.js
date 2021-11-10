// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории(всех вложенных в него < li >).

const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

let categoryName;

let categoryItemsCount;

for (let category of categories) {

    categoryName = category.firstElementChild.textContent;

    categoryItemsCount = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);   

    console.log(`Elements: ${categoryItemsCount}`);

};



