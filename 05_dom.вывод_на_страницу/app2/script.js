document.querySelector('#print').onclick = print;
document.querySelector('#reload').onclick = reload;

function print() {
    document.querySelector('link').href = 'style2.css';
}

function reload() {
    location.reload();
}


