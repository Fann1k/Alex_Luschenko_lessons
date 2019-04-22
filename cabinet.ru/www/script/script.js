document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    sex.forEach(element => {
        if (element.checked) {
            sex = element.value;
        }

    });

    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', signup, data);

    function signup(result) {
        console.log(result);
        if (result == 2) {
            M.toast({ html: 'Заполните поля!', classes: 'rounded red lighten-1' });
        }

        else if (result == 1) {
            M.toast({ html: 'Успех. Теперь можно войти!', classes: 'rounded green lighten-1' });
            //очистка формы
            let signupInput = document.querySelectorAll('.signup-input');
            signupInput.forEach(element => {
                element.value = '';
            });
            closeModalWrap();
        }

        else {
            M.toast({ html: 'Ошибка. Повторите регистрацию позже!', classes: 'rounded green lighten-1' });
        }
    }
}


document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass": pass,
        "email": email,
    }

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            M.toast({ html: 'Заполните поля!', classes: 'rounded red lighten-1' });
        }

        else if (result == 0) {
            M.toast({ html: 'Пользователь не найден!', classes: 'rounded red lighten-1' });
        }

        else {
            result = JSON.parse(result);
            console.log(result);
            let d = new Date();
            d.setTime(d.getTime() + (9 * 60 * 1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = 'cabinet.php';
            console.log(result);
        }
    }
}

