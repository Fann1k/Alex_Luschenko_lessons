
document.querySelector('.bg-change').onclick = bgChange;
document.querySelector('.push').onclick = show;

function bgChange() {
    let bgColor = document.querySelector('.color-input').value;
    document.querySelector('body').style.backgroundColor = bgColor;
}

function show() {

    // input type="text"
    console.log(document.querySelector('.text-input').value);

    // input type="password"
    console.log(document.querySelector('.pass-input').value);

    // input type="range"
    console.log(document.querySelector('.range-input').value);

    // input type="date"
    console.log(document.querySelector('.calend-input').value);

    // input type="color"
    console.log(document.querySelector('.color-input').value);

    // input type="checkbox"
    console.log(document.querySelector('.checkbox-input').checked);

    if (document.querySelector('.checkbox-input').checked) {
        console.log('Элемент выбран');
    }

    else {
        console.log('Элемент не выбран');
    }

}
