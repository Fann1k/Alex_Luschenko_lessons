let block1 = document.querySelector('.block-1');
// let block1Style = block1.style;

console.log(block1.style);

block1.classList.add('red');
block1.classList.add('green');

block1.classList.remove('green');

console.log(block1.classList); //список всех классов
//проверка наличия классса у элемента
console.log(block1.classList.contains('red'));


block1.classList.toggle('red'); // - если класс уже есть, то мы его отключаем
block1.classList.toggle('red'); // - если класса нет, то мы его включаем

