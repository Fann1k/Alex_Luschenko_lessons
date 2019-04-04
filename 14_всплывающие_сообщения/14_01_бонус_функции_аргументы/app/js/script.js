let one = document.querySelector('.one');
let two = document.querySelector('.two');

function f1() {
    one.innerHTML += ' hello';
}

f1();

function f2() {
    two.innerHTML += ' hello';
}

f2();

two = document.querySelector('.three');

f2();

function f4(Zzz) {
    let d = document.querySelector(Zzz);
    d.innerHTML += ' work';
}

f4('.one');



// function f5(sum) {
//     sum.innerHTML = 'hello';
//     console.log(sum);
// }

// f5(one);

// function f6(sum) {
//     one.innerHTML = sum; //внутрь one записываем переменную sum
//     console.log(one);
// }

// f6('222111'); //что напишем вместо sum, то и запишется в one

function f7(sum) {
    sum.innerHTML = '1155';
    console.log(sum);
}

one.onclick = function () {
    f7(one);
}