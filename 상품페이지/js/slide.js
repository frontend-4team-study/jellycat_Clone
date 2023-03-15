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

    makeClone(); // 처음이미지와 마지막 이미지 복사 함수



        function makeClone(){
            for(let i = 0; i < slideCount; i++){
                let cloneSlide = slide[i].cloneNode(true);
                slides.append(cloneSlide);
            }
    
            for(let i = slideCount-1; i>=0; i--){
                let cloneSlide = slide[i].cloneNode(true);
                slides.prepend(cloneSlide);
            }
            
            updateWidth();
            setInitialPosition();
    
            setTimeout(function(){
                slides.classList.add('animated');
            }, 100);
    }

    function updateWidth(){
        let currentSlide = document.querySelectorAll('.slides li');
        let newSlideCount = currentSlide.length;

        let newWidth = (slideWidth) * newSlideCount + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPosition(){
        let initialTransValue = -(slideWidth) * slideCount;
        slides.style.transform = `translateX(${initialTransValue}px)`;
    }

    
    // initfunction(); //슬라이드 넓이와 위치값 초기화 함수

    // function makeClone() {
    //     let cloneSlide_first = slide[0].cloneNode(true);
    //     let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    //     slides.append(cloneSlide_first);
    //     slides.insertBefore(cloneSlide_last, slides.firstElementChild);
    //     }
    // function initfunction() {
    //     slides.style.width = (slideWidth) * (slideCount + 2) + 'px';
    //     slides.style.left = -(slideWidth) + 'px';
    // }
    // rightBtn.addEventListener('click', function () {
    //     //다음 버튼 눌렀을때
    //     if (currentIdx <= slideCount - 1) {
    //         //슬라이드이동
    //         slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    //         slides.style.transition = `${0.5}s ease-out`; //이동 속도
    //     }
    //     if (currentIdx === slideCount - 3) {
    //     //마지막 슬라이드 일때
    //         setTimeout(function () {
    //         //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
    //             slides.style.left = -(slideWidth + slideMargin) + 'px';
    //             slides.style.transition = `${0}s ease-out`;
    //             }, 500);
    //         currentIdx = -1;
    //         }
    //         currentIdx += 1;
    //     });
    // leftBtn.addEventListener('click', function () {
    //     //이전 버튼 눌렀을때
    //     console.log(currentIdx);
    //     if (currentIdx >= 0) {
    //         slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
    //         slides.style.transition = `${0.5}s ease-out`;
    //     }
    //     if (currentIdx === 0) {
    //         setTimeout(function () {
    //         slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
    //         slides.style.transition = `${0}s ease-out`;
    //         }, 500);
    //         currentIdx = slideCount;
    //         }
    //         currentIdx -= 1;
    //     });