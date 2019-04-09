let button = document.querySelector('button'),
    arr = [1, 5, 6, 'g', 'd', 'f'],
    newArr = [];

button.addEventListener('click', function () {
    arr.forEach(function (element) {
        if ((typeof (element)) === 'number') {
            newArr.push(element);
        }
    });
    document.querySelector('#output').innerText = newArr;
});