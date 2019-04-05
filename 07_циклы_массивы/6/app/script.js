let result = 0;
for (let i = 1; i < 10; i++) {
    result = i * 7;
    document.querySelector('#output').innerHTML += `${i} * 7 = ${result}<br>`;
}