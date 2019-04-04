let one = document.querySelector('.one');

function myClick() {
    console.log(111);
    one.onclick = null;
    document.querySelector('.two').onclick = myClick2;
}

one.onclick = myClick;

function myClick2() {
    console.log(222);
    this.onclick = myClick3;
}

function myClick3() {
    console.log(333);
}