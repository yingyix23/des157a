window.addEventListener('load', function () {
    'use strict';

    function animateSlider(element, direction){
        const sliderContent = document.querySelector(`${element} .a`);
        const sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
        document.querySelector(`${element} .slider`).appendChild(cloned);
        let root = document.querySelector(':root');
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
        document.querySelector(`${element} .slider`).classList.add(`${direction}`);
    }

    animateSlider('#one', 'left');   

    // ----- image modal -----
    const slider = document.querySelector('#one .slider');
    const popup = document.querySelector('#popup');
    const popupImg = document.querySelector('#popup-img');

    // click any image in the gallery
    slider.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            popupImg.src = event.target.src;
            popupImg.alt = event.target.alt;
            popup.classList.remove('hidden');
            slider.style.animationPlayState = 'paused';   // stops the scroll while zoomed in
        }
    });

    // click anywhere on the screen, background or the image itself
    popup.addEventListener('click', function () {
        popup.classList.add('hidden');
        popupImg.src = '';
        slider.style.animationPlayState = 'running';      // resume the scroll
    });

    // ----- previous code for popup -----
    // const container = document.querySelector('.a'); 
    // const popupElement = document.querySelector('.popup');
    // const popupimg = document.querySelector('.popup-img');

    // container.addEventListener('click',(event) => {
    //     if (event.target.tagName === 'IMG') {
    //         const imageID = event.target.id;

    //         console.log('Clicked Image ID:', imageID);
    //         popupElement.style.display = "block";
    //         popupimg.src = event.target.src;


            
    //     }
    // })
});