/* function parallax() {
    window.addEventListener("mousemove", function (event) {
        let mouseX = event.clientX
        let mouseY = event.clientY
        let newTransformX = 
        let newTransformY =
        window.style.transform = `translateX(-${[checkIndex] / 40}%)`
        window.style.transform = `translateY(-${[checkIndex] / 40}%)`
    })
} */

/* let supraImg = document.querySelector(".supra_img")
document.addEventListener("mousemove", function (event) {
    let mouseX = event.clientX
    let mouseY = event.clientY
    let rect = supraImg.getBoundingClientRect()
    let rectWidth = rect.width
    let rectHeight = rect.height
    let x = mouseX - rectWidth / 2
    let y = mouseY - rectHeight / 2
    supraImg.style.transform = `translateX(-${x}px) translateY(-${y}px)`
}) */


const slideImage = document.querySelectorAll('.slide__image');
let SlideIndex = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage2 = document.querySelectorAll('.slide__image2');
let SlideIndex2 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage2[SlideIndex2].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage3 = document.querySelectorAll('.slide__image3');
let SlideIndex3 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage3[SlideIndex3].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage4 = document.querySelectorAll('.slide__image4');
let SlideIndex4 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage4[SlideIndex4].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage5 = document.querySelectorAll('.slide__image5');
let SlideIndex5 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage5[SlideIndex5].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage6 = document.querySelectorAll('.slide__image6');
let SlideIndex6 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage6[SlideIndex6].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage7 = document.querySelectorAll('.slide__image7');
let SlideIndex7 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage7[SlideIndex7].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage8 = document.querySelectorAll('.slide__image8');
let SlideIndex8 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage8[SlideIndex8].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage9 = document.querySelectorAll('.slide__image9');
let SlideIndex9 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage9[SlideIndex9].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage10 = document.querySelectorAll('.slide__image10');
let SlideIndex10 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage10[SlideIndex10].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage11 = document.querySelectorAll('.slide__image11');
let SlideIndex11 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage11[SlideIndex11].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage12 = document.querySelectorAll('.slide__image12');
let SlideIndex12 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage12[SlideIndex12].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})

const slideImage13 = document.querySelectorAll('.slide__image13');
let SlideIndex13 = 0

window.addEventListener("mousemove", (e) => {

    x = e.offsetX;
    y = e.offsetY;
    slideImage13[SlideIndex13].style.transform = `translate(${-x / 80}px, ${-y / 80}px)`;
})