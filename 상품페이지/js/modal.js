
function onClick() {
    document.querySelector('.modal_body').style.display = "block";
    document.querySelector('#modal_bg').style.display = "block";
}

function offClick() {
    document.querySelector('.modal_body').style.display = "none";
    document.querySelector('#modal_bg').style.display = "none";
}   

    document.getElementById('openBtn').addEventListener('click', onClick);
    document.getElementById('write-review').addEventListener('click', onClick);

    document.getElementById('closeBtn').addEventListener('click', offClick);
    document.getElementById('modal_bg').addEventListener('click', offClick);