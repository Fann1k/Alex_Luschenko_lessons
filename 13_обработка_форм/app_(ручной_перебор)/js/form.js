//получаем данные из select
let select = document.querySelector('#select-1');
select.onchange = function () {
    console.log(select.value);
}

//получаем данные из radio
document.querySelector('.push-radio').onclick = function () {
    let radioInput = document.querySelectorAll('input[name = "rad-1"]');
    radioInput.forEach(element => {
        if (element.checked) {
            console.log(element.value);
        }

    });
}

//получаем данные из text
document.querySelector('.push-text').onclick = function () {
    console.log(document.querySelector('.text-input').value);
} 