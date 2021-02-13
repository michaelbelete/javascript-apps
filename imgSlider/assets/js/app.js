const slides = document.querySelectorAll('.slide-img')

let slider = 0

function transation() {
    // const activeSlide = document.querySelector(".active")
    // activeSlide
    // activeSlide.classList.remove('active')
    if (slider == 2) {
        slider = 0
    } else {
        slider += 1
    }

    if (slider == 0) {
        slides[2].classList.remove('active')
    } else {
        slides[slider - 1].remove('active')
    }
    slides[slider].classList.add('active')
    console.log(slides[slider])
        // const newSlider = slides[slider];
        // console.log(newSlider)
}


setInterval(transation, 1000)
    // slides.forEach(function(slide) {
    //     let activeSlide = slide.
    // });