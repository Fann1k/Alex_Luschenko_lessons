// формируем рандомное число от 0 до 10
let r = Math.floor(Math.random() * 11);
console.log(r);

// назначаем переменные
let btn = document.querySelector('#btn');    //кнопка
let num = document.querySelector('#num');    //input
// let userNum = num.value;  - не понимаю почему не работает, если переменную объявить здесь

// при нажатии на кнопку выполняем ф-ю checkNum
btn.onclick = checkNum;

//ф-я checkNum
function checkNum() {
    let userNum = num.value;  //если здесь объявить, то работает
    userNum = parseInt(userNum);
    if ((!isNaN(userNum)) && (userNum == r)) { //переменную "r" объявил в начале, но все равно работает, в отличие от userNum
        alert('Вы угадали!');
        location.reload();
    }

    else {
        alert('Введите другое число!');
    }
}
