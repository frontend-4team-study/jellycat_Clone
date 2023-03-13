let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 380; 
let leftBtn = document.querySelector('.left_arrow');
let rightBtn = document.querySelector('.right_arrow');

    function moveSlide(num){
        slides.style.left = -num * slideWidth + 'px';
        currentIdx = num;
    }

    rightBtn.addEventListener('click', function(){
        moveSlide(currentIdx+1) ;
    });

    leftBtn.addEventListener('click', function(){
        moveSlide(currentIdx-1);
    }); 

    makeClone();

    function makeClone(){
            for(var i = 0; i < slideCount; i++){
                var cloneSlide = slide[i].cloneNode(true);
                slides.append(cloneSlide);
            }
    
            for(var i = slideCount-1; i>=0; i--){
                var cloneSlide = slide[i].cloneNode(true);
                slides.prepend(cloneSlide);
            }
            updateWidth();
            setInitialPosition();
    
            setTimeout(function(){
                slides.classList.add('animated');
            }, 100);
    }

    function updateWidth(){
        var currentSlide = document.querySelectorAll('.slides li');
        var newSlideCount = currentSlide.length;

        var newWidth = (slideWidth) * newSlideCount + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPosition(){
        var initialTransValue = -(slideWidth) * slideCount;
        slides.style.transform = `translateX(${initialTransValue}px)`;
}
    