document.querySelector('#result').addEventListener('click', function () {
    let number = document.querySelector('#number'),
        exponent = document.querySelector('#exponent'),
        result = 1;
    for (let i = 0; i < (+exponent.value); i++) {
        result = result * (+number.value);
        document.querySelector('#output').innerHTML = result;
    }
});