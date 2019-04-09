let button = document.querySelector('button'),
    arr = [1, 1, 1, 5, 6, 8, 23, 23, 23, 'g', 'g', 'g', 'b', 'c', 'c'],
    result = {};

button.addEventListener('click', function () {
    arr.forEach(function (e) { //перебираем массив
        if (result[e] != undefined) //если элемент есть в result
            ++result[e]; //в значение свойства +1
        else
            result[e] = 1; //если элемента нет в result - в значение свойства пишем 1
    });
    //перебираем result и выводим
    for (let key in result) {
        document.querySelector('#output').innerHTML += `<b>${key}</b> встречается <b>${result[key]}</b> раз(а) <br>`;
    }
});