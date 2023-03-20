let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 360;
let leftBtn = document.querySelector(".left_arrow");
let rightBtn = document.querySelector(".right_arrow");

rightBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});

leftBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPosition();

  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  var currentSlide = document.querySelectorAll(".slides li");
  var newSlideCount = currentSlide.length;

  var newWidth = slideWidth * newSlideCount + "px";
  slides.style.width = newWidth;
}

function setInitialPosition() {
  var initialTransValue = -slideWidth * slideCount;
  slides.style.transform = `translateX(${initialTransValue}px)`;
}

function moveSlide(num) {
  slides.style.left = -num * slideWidth + "px";
  currentIdx = num;
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);

    setTimeout(function () {
      slides.classList.add("animated");
    }, 600);
  }
}
