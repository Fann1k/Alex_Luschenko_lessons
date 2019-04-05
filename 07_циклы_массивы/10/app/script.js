let output = document.querySelector('#output'),
    day = document.querySelector('#day'),
    month = document.querySelector('#month'),
    a = +day.value + (+month.value * 100);

for (let i = 1; i < 1232; i++) {
    if (a >= 321 && a <= 419) {
        output.innerText = 'Овен';
    }
}