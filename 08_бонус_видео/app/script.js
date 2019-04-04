// document.querySelectorAll('.block').onclick = function () {
//     console.log('work');
// }

console.log(document.querySelectorAll('.block'));

let blocks = document.querySelectorAll('.block');
let blocks2 = document.getElementsByClassName('block');
console.log(blocks2);

for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = one;
}



// blocks.forEach(function (element) {
//     console.log(element);
//     element.onclick = function () {
//         console.log('work');
//     }
// });


function one() {
    console.log('work');
    this.style.background = 'green';
}