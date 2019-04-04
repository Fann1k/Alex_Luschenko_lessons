document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = modalShow;
}); //из массива document.querySelectorAll('.modal-show') каждый элемент перебирается и при клике на нем выполн-ся ф-я modalShow

document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = modalClose;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.onclick = closeModalWrap;
});



function modalShow() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
    document.querySelector(modalId).parentElement.classList.add('flex');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            document.querySelectorAll('.modal-wrap').forEach(function (element) {
                console.log(event);
                element.classList.add('hide');
                element.classList.remove('flex');
                element.children[0].classList.add('hide');
                document.onkeydown = null;
            });
        }
    }
}

function modalClose() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
    document.querySelector(modalId).parentElement.classList.remove('flex');
    document.onkeydown = null;
}

function closeModalWrap() {
    this.classList.add('hide');
    this.children[0].classList.add('hide');
    this.classList.remove('flex');
    document.onkeydown = null;
}


