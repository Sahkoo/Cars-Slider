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

window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/80}px, ${-y/80}px)`;
})