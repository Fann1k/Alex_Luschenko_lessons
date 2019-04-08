let arr = [1, 0, 0, 0, 0, 0];
document.querySelector('#output').innerText = arr;
document.querySelector('button').addEventListener('click', function () {
    if (arr[arr.length - 1] == 1) {
        return;
    }
    arr.unshift(arr.pop());
    document.querySelector('#output').innerText = arr;
});