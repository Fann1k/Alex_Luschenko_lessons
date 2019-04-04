let tabBody = document.querySelectorAll('.tab-body'); //присваиваем tabBody - массив элементов с классом tab-body
let tab = document.querySelectorAll('.tab'); //присваиваем переменной tab - массив элементов с классом tab (tab это li)

init(); //запускаем функцию, которая скрывает все блоки, кроме нулевого

function init() {
    //присваиваем tabBody - массив элементов с классом tab-body
    for (let i = 1; i < tabBody.length; i++) { //перебираем все элементы tabBody и каждому элементу (кроме нулевого) 
        tabBody[i].style.display = 'none'; //присваиваем display:none
    }
}


tab.forEach(function (element) { //перебираем все элементы tab и каждому элементу 
    element.onclick = showTabs; //при нажатии присваиваем выполнять ф-ю showTabs
});

function showTabs() { //запускаем ф-ю, которая показывает элемент, на который кликнули и скрывает остальные
    // console.log('work');
    let data = this.getAttribute('data'); //присваиваем data - атрибут 'data' элемента, на который мы кликнули
    console.log(data);

    for (let i = 0; i < tabBody.length; i++) { //перебираем все элементы и КАЖДОМУ элементу
        tabBody[i].style.display = 'none'; //присваиваем display:none
    }


    // document.querySelector('.tab-body[data="'+ data +'"]').style.display = 'block';
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block'; //элементу с классом .tab-body и с атрибутом data, равным переменной data (переменная пишется так:${data}) присвоить значение display: block;
}