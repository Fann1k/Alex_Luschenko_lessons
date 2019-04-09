let inp = document.querySelector('input'),
    button = document.querySelector('button');


button.addEventListener('click', function () {
    let newArr = [];
    for (let i = 0; i < (+inp.value); i++) {
        newArr.push(1);
    }
    document.querySelector('#output').innerText = newArr;
});