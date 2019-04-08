let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    document.querySelector('#output').innerText = `Количество параграфов на странице:   ${+i+1}`;
}