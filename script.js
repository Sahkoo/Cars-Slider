let slider = document.querySelector(".slider")
let sliderSlide = document.querySelectorAll(".slider__slide")
let sliderDotsLi = document.querySelectorAll(".slider-dots_li")
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#47947f"]


let checkIndex = 0

function autoPlaySlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
}

function goToSlide(index) {
    checkIndex = index
    autoPlaySlide(checkIndex)
    document.body.style.background = colors[index]
}

function goNextSlide() {
    checkIndex = (checkIndex + 1) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

function goPrevSlide() {
    checkIndex = (checkIndex - 1 + sliderSlide.length) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

for (let i = 0; i < sliderDotsLi.length; i++) {
    sliderDotsLi[i].addEventListener("click", function () {
        goToSlide(i)
    })
}