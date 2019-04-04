document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = modalShow;
}); //из массива document.querySelectorAll('.modal-show') каждый элемент перебирается и при клике на нем выполн-ся ф-я modalShow

document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = closeModalWrap;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.onclick = closeModalWrap;
});

document.querySelector('.modal').onclick = function () {
    event.stopPropagation();
}


function modalShow() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.querySelector(modalId).classList.add('flex');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            closeModalWrap();
        }
    }
}

function closeModalWrap() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        console.log(event);
        element.classList.add('hide');
        element.classList.remove('flex');
    });
    document.onkeydown = null;
}



