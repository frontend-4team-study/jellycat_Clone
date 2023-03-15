
let originalHeight = 1000;

function onClick(){
    document.querySelector('.additional').style.display = 'block';
    let addedHeight = originalHeight + 630 + 'px';
    document.querySelector('.reviews').style.height = addedHeight;
    document.querySelector('#addBtn').style.display = 'none';
}

document.getElementById('addBtn').addEventListener('click', onClick);