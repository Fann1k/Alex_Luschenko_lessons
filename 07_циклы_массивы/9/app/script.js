let p = document.querySelectorAll('.main p');

for (let i = 0; i < p.length; i++) {
    p[i].insertAdjacentHTML('afterbegin', `${i+1} `);
}