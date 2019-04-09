let button = document.querySelector('button'),
    arr = [1, 5, 6, 8, 23, 'g', 'd', 'f'],
    newArr = [];

button.addEventListener('click', function () {
    arr.forEach(function (element) { //перебираем массив arr
        if ((typeof (element)) === 'number') { //все числа пушим в новый массив
            newArr.push(element);
        }
    });
    document.querySelector('#output').innerText = getMaxOfArray(newArr);
});

//ф-я для нахождения максимального элемента в числовом массиве
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}