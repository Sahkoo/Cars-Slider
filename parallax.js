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


const slideImage = document.querySelectorAll(".slide__image");
const parallax2 = document.querySelectorAll(".slide__image2")
const parallax3 = document.querySelectorAll(".slide__image3")

window.addEventListener("mousemove", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    for (let i = 0; i < slideImage.length; i++) {
        let newParallax = slideImage[i]
        newParallax.style.transform = `translate(${-x / 100}px, ${-y / 100}px)`;
    }

    for (let j = 0; j < slideImage.length; j++) {
        let parallax = parallax2[j]
        parallax.style.transform = `translate(${x / 60}px, ${y / 60}px)`;
    }

    for (let k = 0; k < slideImage.length; k++) {
        let paralax = parallax3[k]
        paralax.style.transform = `translate(${-x / 200}px, ${-y / 200}px)`;
    }
})