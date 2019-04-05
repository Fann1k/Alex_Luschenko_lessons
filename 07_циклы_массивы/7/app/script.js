let result = 1;
for (let i = 1; i < 51; i++) {
    result = result * i;
    document.querySelector('#output').innerHTML = result;
}