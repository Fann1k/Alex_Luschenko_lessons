//показать/скрыть пароль в форме для регистрации
let passRegIcon = document.querySelector('#visibility-icon1');
let signupPass = document.querySelector('#signup-pass');

passRegIcon.onclick = function () {
    show1();
}

function show1() {
    signupPass.type = 'text';
    passRegIcon.innerHTML = 'visibility_off';
    passRegIcon.onclick = function () {
        hide1();
    }
}

function hide1() {
    signupPass.type = 'password';
    passRegIcon.innerHTML = 'visibility';
    passRegIcon.onclick = function () {
        show1();
    }
}

//показать/скрыть пароль в форме для логина
let passLoginIcon = document.querySelector('#visibility-icon2');
let passLogin = document.querySelector('#login-pass');
passLoginIcon.onclick = function () {
    show2();
}

function show2() {
    passLogin.type = 'text';
    passLoginIcon.innerHTML = 'visibility_off';
    passLoginIcon.onclick = function () {
        hide2();
    }
}

function hide2() {
    passLogin.type = 'password';
    passLoginIcon.innerHTML = 'visibility';
    passLoginIcon.onclick = function () {
        show2();
    }
}

//инициализация datepicker
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        format: 'yyyy-mm-dd',
        yearRange: [1920, 2019]
    });
});

