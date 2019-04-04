//вывод в input строчных букв
document.querySelector('#only-letters').onkeypress = function (e) {
    console.log(e.keyCode);
    //если строчные буквы, то выводим в input
    if (e.keyCode >= 97 && e.keyCode <= 122) {
        this.value += e.key;
    }

    // если прописные буквы, то выводим в input пустую строку
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        this.value += '';
    }
    return false;
}


//движение блока внутри блока
let movingY = 0;
let movingX = 0;
let turn = 0;

document.onkeydown = function (e) {
    let blockIn = document.querySelector('.block-in');
    //движение вниз
    if (e.keyCode == 40) {
        movingY = movingY + 10;
        blockIn.style.marginTop = movingY + 'px';
    }

    //движение вверх
    if (e.keyCode == 38) {
        movingY = movingY - 10;
        blockIn.style.marginTop = movingY + 'px';
    }

    //движение вправо
    if (e.keyCode == 39) {
        movingX = movingX + 10;
        blockIn.style.marginLeft = movingX + 'px';
    }

    //движение влево
    if (e.keyCode == 37) {
        movingX = movingX - 10;
        blockIn.style.marginLeft = movingX + 'px';
    }

    //поворот вокруг оси
    if (e.keyCode == 32) {
        turn = turn + 45;
        blockIn.style.transform = `rotate(${turn}deg)`;
    }
}

//меняем введенное значение на рандомное
document.querySelector('#random-letters').onkeypress = function (e) {
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
    let r = randomInteger(48, 122);
    this.value += String.fromCodePoint(r);
    console.log(r);

    return false;
}


//меняем введенное значение на соседнее
let arrayLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

document.querySelector('#change-letters').onkeypress = function (e) {
    console.log(e.key); //чтобы на видео было видно, что нажимается

    for (let i = 0; i < arrayLetters.length; i++) {
        if (e.key == arrayLetters[i]) {
            this.value += arrayLetters[i + 1];
        }

        if (e.key == ']') {
            this.value += 'q';
            return false;
        }

        if (e.key == '\\') {
            this.value += 'a';
            return false;
        }

        if (e.key == '/') {
            this.value += 'z';
            return false;
        }

        if (e.key == 'm') {
            this.value += 'q';
            return false;
        }

    }
    return false;
}
