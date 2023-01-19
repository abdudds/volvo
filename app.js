
let prevButton = document.querySelector("#slider-prev")
let nextButton = document.querySelector("#slider-next")
let sliderTrack = document.querySelector("#slider-track")

let sliderIndicator = document.querySelectorAll('.bar')

prevButton.addEventListener("click", prevSlide)
nextButton.addEventListener("click", nextSlide)

let pos = 0
let max = 9
function prevSlide () {
    sliderTrack.scrollLeft -= 462
    if (pos != 0) {
        sliderIndicator[pos].classList.remove("active")
        sliderIndicator[pos-1].classList.add("active")
        pos = pos-1
    }
    
}

function nextSlide () {
    console.log("next")
    sliderTrack.scrollLeft += 462
    if (pos < max) {
        sliderIndicator[pos].classList.remove("active")
        sliderIndicator[pos+1].classList.add("active")
        pos = pos+1
    }
    
}



