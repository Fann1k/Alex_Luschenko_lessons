// получаем данные из select вручную
let select = document.querySelector('#select-1');
select.onchange = function () {
    console.log(select.value);
}

//получаем данные из radio вручную
document.querySelector('.push-radio').onclick = function () {
    event.preventDefault();
    let radioInput = document.querySelectorAll('input[name = "test-radio"]');
    radioInput.forEach(element => {
        if (element.checked) {
            console.log(element.value);
        }
    });
}

//получаем все данные с помощью serialize
let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
sendForm.onclick = function (event) {
    event.preventDefault();
    console.log(serialize(form));
}