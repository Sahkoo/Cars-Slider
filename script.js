let slider = document.querySelector(".slider")
let buttonLeft = document.querySelector(".arrow__left")
let buttonRight = document.querySelector(".arrow__right")
let sliderSlide = document.querySelectorAll(".slider__slide")

let checkIndex = 0

function goNextSlide() {
    sliderSlide[checkIndex].classList.remove("active-slide")
    checkIndex = (checkIndex + 1) % sliderSlide.length
    sliderSlide[checkIndex].classList.add("active-slide")
}
buttonRight.addEventListener("click", goNextSlide)

function goPrevSlide() {
    sliderSlide[checkIndex].classList.remove("active-slide")
    checkIndex = (checkIndex - 1 + sliderSlide.length) % sliderSlide.length
    sliderSlide[checkIndex].classList.add("active-slide")
}
buttonLeft.addEventListener("click", goPrevSlide)

function autoPlaySlide(){
    
}