let randomArr = [-5, -3, -1, 2, 4, 6],
    newArr = [];

randomArr.forEach(function (element) {
    if (element < 0) {
        newArr.push(element);
    }
});
document.querySelector('#output').innerText = 'Кол-во элементов меньше нуля: ' + newArr.length;