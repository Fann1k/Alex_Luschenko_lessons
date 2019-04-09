let inp = document.querySelector('input'),
    button = document.querySelector('button');
//ф-я для создания рандомного числа
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

button.addEventListener('click', function () {
    let newArr = [];
    for (let i = 0; i < (+inp.value); i++) {
        newArr.push(randomInteger(0, 100));
    }
    document.querySelector('#output').innerText = newArr;
});