let images = document.querySelectorAll('.slider img');
let current = 0;
slider();
function slider() {
    images.forEach(element => {
        element.classList.add('opacity0');
        images[current].classList.remove('opacity0');
    });

}

document.querySelector('.btn-up').onclick = function () {

    if (current - 1 == -1) {
        current = images.length - 1;
    }

    else {
        current--;
    }
    slider();
}

document.querySelector('.btn-down').onclick = function () {

    if (current + 1 == images.length) {
        current = 0;
    }

    else {
        current++;
    }
    slider();
}


