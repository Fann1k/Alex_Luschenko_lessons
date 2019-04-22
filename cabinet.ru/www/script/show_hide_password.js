let passIcon = document.querySelector('#visibility-icon');
let updatePass = document.querySelector('#update-pass');
passIcon.onclick = function () {
    show();
}

function show() {
    updatePass.type = 'text';
    passIcon.innerHTML = 'visibility_off';
    passIcon.onclick = function () {
        hide();
    }
}

function hide() {
    updatePass.type = 'password';
    passIcon.innerHTML = 'visibility';
    passIcon.onclick = function () {
        show();
    }
}

