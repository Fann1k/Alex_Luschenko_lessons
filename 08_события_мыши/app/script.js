document.querySelector('.onclick').onclick = function () {
    console.log('click');
}

// document.querySelector('.ondblclick').ondblclick = function () {
//     console.log('dblclick');
// }

document.querySelector('.onmousemove').onmousemove = function () {
    console.log('onmousemove');
}

document.querySelector('.onmouseenter').onmouseenter = function () {
    console.log('onmouseenter');
}

document.querySelector('.onmouseleave').onmouseleave = function () {
    console.log('onmouseleave');
}

document.querySelector('.onmousewheel').onmousewheel = function () {
    console.log('wheel');
    return false;
}

function test() {
    console.log(2 / 3)
}

function test2() {
    return 2 / 3;
}

test();
console.log(5 * test2());



document.querySelector('.ondblclick').ondblclick = function () {
    console.log('dblclick');
}

//отменяем выделение при двойном нажатии
document.querySelector('.ondblclick').onmousedown = function () {
    return false;
}

//отключаем ПКМ
document.querySelector('html').oncontextmenu = function () {
    console.log('Клик правой кнопкой мыши на документе отключен');
    return false;
}


//имитация открытия и закрытия папки
document.querySelector('.folder').onmouseenter = function () {
    document.querySelector('.folder-open').style.display = 'block';
    document.querySelector('.folder-close').style.display = 'none';
}

document.querySelector('.folder').onmouseleave = function () {
    document.querySelector('.folder-open').style.display = 'none';
    document.querySelector('.folder-close').style.display = 'block';
}

//окрашивание блокjd
document.querySelector('.bg-color1').onmouseenter = function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    console.log(a, b, c);
    document.querySelector('.bg-color1').style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

document.querySelector('.bg-color2').onmouseenter = function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    console.log(a, b, c);
    document.querySelector('.bg-color2').style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

document.querySelector('.bg-color3').onmouseenter = function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    console.log(a, b, c);
    document.querySelector('.bg-color3').style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

