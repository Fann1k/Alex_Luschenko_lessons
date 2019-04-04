// парный тег
document.querySelector('p').innerHTML += ' Пример b <b>Hi</b>';
document.querySelector('p').innerText += ' Пример b <b>Hi</b>';
// --------------------------------------

document.querySelector('h1').outerHTML = '<h2>jjjjjj</h2>'
document.querySelector('h2').outerText = '<h2>jjjjjj</h2>'
// --------------------------------------

document.querySelector('div').insertAdjacentHTML('beforebegin', 2222);
document.querySelector('div').insertAdjacentHTML('afterbegin', 3333);
document.querySelector('div').insertAdjacentHTML('beforeend', 4444);
document.querySelector('div').insertAdjacentHTML('afterend', 5555);
// --------------------------------------

document.querySelector('.one span').innerHTML = 99999;
// --------------------------------------

console.log(document.querySelector('img').alt);
document.querySelector('img').alt = 'white cat';


console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://cdn1.iconfinder.com/data/icons/amenities-outline-ii/48/_bikes-48.png';


document.querySelector('title').innerHTML = 'Lesson 4';

document.querySelector('link').href = 'style2.css';
// ------------------------------------------

console.log(document.querySelector('input').type);
document.querySelector('input').type = 'range';