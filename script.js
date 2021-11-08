const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
let slideLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;


slideLeft.style.top = `-${(slideLength - 1) * 100}vh`


const changeSlide = (direction) => {
    const silderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slideLength -1){
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * silderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * silderHeight}px)`;
}

// downBtn.addEventListener('click', () => {
//     console.log(activeSlideIndex)
//     if(activeSlideIndex <= 1) {
//         activeSlideIndex = slideLength - 1;
//         slideLeft.style.top = `-${((activeSlideIndex - 1) * 100)}vh`;
//     } else {
//         slideLeft.style.top = `-${((activeSlideIndex - 1) * 100) - 100}vh`;
//         activeSlideIndex--;
//     }
// });


// upBtn.addEventListener('click', () => {
//     if(activeSlideIndex >= slideLength -1) {
//         activeSlideIndex = 0;
//         slideRight.style.top = '0';
//     } else {
//         activeSlideIndex++;
//         slideRight.style.top = `-${(activeSlideIndex - 1) * 100 + (100)}vh`;
//     }
// });
downBtn.addEventListener('click', () => {
    changeSlide('down')
});
upBtn.addEventListener('click', () => {
    changeSlide('up')
});