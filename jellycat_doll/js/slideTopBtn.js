let layer1 = document.querySelector('#layer_1');
let layer2 = document.querySelector('#layer_2');

function makeAbove(){
    layer1.style.zIndex = '0';
    layer2.style.zIndex = '3';
}

function makeDown(){
    layer1.style.zIndex = '3';
    layer2.style.zIndex = '0';
}

document.getElementById('meet').addEventListener('click', makeDown);
document.getElementById('viewed').addEventListener('click', makeAbove);
