let block1 = document.querySelector('.block-1');
let showHide = document.querySelector('#show-hide');

showHide.onclick = function () {
    block1.classList.toggle('hide');
}

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        block1.classList.add('hide');
    }
}

