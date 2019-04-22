document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        format: 'yyyy-mm-dd',
        yearRange: [1920, 2019]
    });
});

let userEmail = getCookie('email');

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

function getUserData(result) {
    result = JSON.parse(result);
    // console.log(result);
    document.querySelector('#update-name').value = result.name;
    document.querySelector('#update-pass').value = result.password;
    document.querySelector('#update-birthday').value = result.birthday;
    M.updateTextFields();

}

document.querySelector('#update-submit').onclick = function (event) {
    event.preventDefault();


    // let inputArr = document.querySelectorAll('.input-arr');
    // inputArr.forEach(element => {
    //     if (element.value = ' ') {
    //         M.toast({ html: 'Заполните все поля!', classes: 'rounded red lighten-1' });
    //     }
    //     null;
    // });
    let sex = document.querySelectorAll('.sex');
    sex.forEach(element => {
        if (element.checked) {
            sex = element.value;
        }

    });
    let updateData = {
        "email": userEmail,
        "pass": document.querySelector('#update-pass').value,
        "name": document.querySelector('#update-name').value,
        "birthday": document.querySelector('#update-birthday').value,
        "sex": sex,

    }

    ajax('core/update_user_data.php', 'POST', updateResult, updateData);
}

function updateResult(updateResult) {
    if (updateResult == 1) {
        M.toast({ html: '<i class="material-icons">check</i> &nbsp Данные успешно изменены!', classes: 'rounded green lighten-1' });
    }

    else {
        M.toast({ html: 'Ошибка при изменении данных!' });
    }

}

