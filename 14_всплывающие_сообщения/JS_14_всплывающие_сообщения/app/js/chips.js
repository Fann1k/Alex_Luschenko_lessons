function chipsCreate(chipsValue, color = '#ddd', timeRemove = 3000) {
    let chips = document.createElement('div');
    chips.innerHTML = chipsValue;
    chips.classList.add('chips');
    chips.style.backgroundColor = color;
    addChipsBlock(chips);
    setTimeout(function () { chipsRemove(chips) }, timeRemove);
}

function chipsRemove(parameter1) {
    parameter1.remove();
    let allChips = document.querySelectorAll('.chips-block .chips');
    if (allChips.length == 0) {
        document.querySelector('.chips-block').remove();
    }
}

function addChipsBlock(parameter2) {
    let chipsBlock = document.querySelector('.chips-block');
    if (chipsBlock) {
        chipsBlock.appendChild(parameter2);
        document.querySelector('body').appendChild(chipsBlock);
    }

    else {
        let chipsBlock = document.createElement('div');
        chipsBlock.classList.add('chips-block');
        chipsBlock.appendChild(parameter2);
        document.querySelector('body').appendChild(chipsBlock);
    }
}

document.querySelector('#success-button').onclick = function () {
    chipsCreate('success', '#28a745');
}

document.querySelector('#info-button').onclick = function () {
    chipsCreate('info', '#17a2b8');
}

document.querySelector('#danger-button').onclick = function () {
    chipsCreate('danger', '#dc3545');
}