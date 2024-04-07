// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в 
// ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// ----------------------I----------------------
const categories = document.querySelector('ul#categories');
// console.log(categories);
// console.log(categories.children.length);
const stroka = 'Number of categories:'
const getManyCategories = categories.children.length;
// console.log('Number of categories:', getManyCategories);
console.log(stroka, getManyCategories);

// ----------------------II----------------------
const allItems = document.querySelectorAll('.item');
// console.log(allItems);
allItems.forEach((element) => {

        // let elementTitle = element.querySelector('h2').textContent;
        let elementTitle = element.firstElementChild.textContent;
        
        // let oneTitleElements = element.querySelectorAll('li');
        let oneTitleElements = element.lastElementChild.children;
        let oneTitleElemntsQty = oneTitleElements.length;
        
            console.log('Category:', elementTitle);
            console.log('Elements:', oneTitleElemntsQty);
          
        
        });


    
        
        
        




