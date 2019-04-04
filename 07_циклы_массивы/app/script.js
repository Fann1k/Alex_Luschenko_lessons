document.querySelector('.push').onclick = function () {

    let radio = document.querySelectorAll('.radio-input');
    // console.log(radio);
    // radio[2].hidden = true;
    for (let i = 0; i < radio.length; i++) {
        // console.log(radio[i].checked);
        if (radio[i].checked) {
            console.log(radio[i].value)
        }
    }
}



