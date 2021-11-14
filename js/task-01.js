// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории(всех вложенных в него < li >).

const ulElement = document.querySelector('ul[id="categories"]');

const categories = ulElement.children;

console.log(`Number of categories: ${categories.length}`);

let categoryName;

let categoryItemsCount;

[...categories].forEach(category => {

    categoryName = category.firstElementChild.textContent;

    categoryItemsCount = category.lastElementChild.childElementCount;

    console.log(`Category: ${categoryName}`);   

    console.log(`Elements: ${categoryItemsCount}`);

}
    
);




