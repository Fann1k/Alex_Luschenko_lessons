function hello() {
    console.log('Hello');
    hello2();
}

function hello2() {
    console.log('Hello2');
}

// let btn = document.querySelector('#btn'); 
// console.log(btn.id);
// btn.onclick = hello;
//btn.hidden = true;

let showModal = document.querySelector('#modal-show');
let hideModal = document.querySelector('#modal-hide');
let modal = document.querySelector('.modal');

hide();

showModal.onclick = function show() {
    modal.hidden = false;
}

hideModal.onclick = hide; function hide() {
    modal.hidden = true;
}

// showModal.onclick = show;
// hideModal.onclick = hide;

modal.style.borderRadius = '20px';
modal.style.border = '5px';
