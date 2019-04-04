document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.slider-left').style.marginLeft = '-240px';
}

let rulesBack = document.querySelectorAll('.rules-back');

rulesBack.forEach(element => {
    element.onclick = function () {
        document.querySelector('.slider-left').style.marginLeft = '0';
    };
});

