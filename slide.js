let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 380;
let slideMargin = 30;
let leftBtn = document.querySelector('.left_arrow');
let rightBtn = document.querySelector('.right_arrow');

    function moveSlide(num){
        slides.style.left = -num * 400 + 'px';
        currentIdx = num;
        if(currentIdx == slideCount-3 || currentIdx == -slideCount+3){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            }, 100);
            setTimeout(function(){
                slides.classList.add('animated');
            }, 200);
        }
    }

    rightBtn.addEventListener('click', function(){
        moveSlide(currentIdx+1);
    });

    leftBtn.addEventListener('click', function(){
        moveSlide(currentIdx-1);
    }); 

    makeClone();

    function makeClone(){
        for(var i = 0; i < slideCount; i++){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        }

        for(var i = slideCount-1; i>=0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
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

        var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPosition(){
        var initialTransValue = -(slideWidth + slideMargin) * slideCount;
        slides.style.transform = `translateX(${initialTransValue}px)`;
    }

