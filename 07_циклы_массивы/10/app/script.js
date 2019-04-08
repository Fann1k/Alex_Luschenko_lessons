document.querySelector('button').addEventListener('click', function () {
    let output = document.querySelector('#output'),
        day = document.querySelector('#day'),
        month = document.querySelector('#month'),
        a = +day.value + (+month.value * 100);

    for (let i = 1; i < 1232; i++) {
        if (a >= 120 && a <= 218) {
            output.innerText = 'Водолей';
        } else if (a >= 219 && a <= 320) {
            output.innerText = 'Рыбы';
        } else if (a >= 321 && a <= 419) {
            output.innerText = 'Овен';
        } else if (a >= 420 && a <= 520) {
            output.innerText = 'Телец';
        } else if (a >= 521 && a <= 620) {
            output.innerText = 'Близнецы';
        } else if (a >= 621 && a <= 722) {
            output.innerText = 'Рак';
        } else if (a >= 723 && a <= 822) {
            output.innerText = 'Лев';
        } else if (a >= 823 && a <= 922) {
            output.innerText = 'Дева';
        } else if (a >= 923 && a <= 1022) {
            output.innerText = 'Весы';
        } else if (a >= 1023 && a <= 1121) {
            output.innerText = 'Скорпион';
        } else if (a >= 1122 && a <= 1221) {
            output.innerText = 'Стрелец';
        } else if (a >= 1222 && a <= 1231 || a >= 1 && a <= 119) {
            output.innerText = 'Козерог';
        }
    }
});