let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 380;
let leftBtn = document.querySelector(".left_arrow");
let rightBtn = document.querySelector(".right_arrow");

function moveSlide(num) {
  slides.style.left = -num * slideWidth + "px";
  currentIdx = num;
}

rightBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});

leftBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

makeClone(); // 처음이미지와 마지막 이미지 복사 함수

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    slides.append(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPosition();

  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  let currentSlide = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlide.length;

  let newWidth = slideWidth * newSlideCount + "px";
  slides.style.width = newWidth;
}

function setInitialPosition() {
  let initialTransValue = -slideWidth * slideCount;
  slides.style.transform = `translateX(${initialTransValue}px)`;
}
