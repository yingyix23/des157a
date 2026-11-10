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

/*     const container = document.querySelector('.a'); 
    const popupElement = document.querySelector('.popup');
    const popupimg = document.querySelector('.popup-img'); */

        // ----- image modal -----
    const slider = document.querySelector('#one .slider');
    const popup = document.querySelector('#popup');
    const popupImg = document.querySelector('#popup-img');

    slider.addEventListener('click',function (event){
        if (event.target.tagName === 'IMG') {
            const imageID = event.target.id;
            popupImg.src = event.target.src;
            popupImg.alt = event.target.alt;
            popup.classList.remove('hidden');
            slider.style.animationPlayState = 'paused'; 
        }
    });

    popup.addEventListener('click',function(){
        popup.classList.add("hidden");
        popupImg.src = "";
        slider.style.animationPlayState = 'running';
    });

    const container = document.querySelector('.a'); 
    const popupElement = document.querySelector('.popup');
    const popupimg = document.querySelector('.popup-img'); 

    container.addEventListener('click',(event) => {
   if (event.target.tagName === 'IMG') {
    const imageID = event.target.id;

    console.log('Clicked Image ID:', imageID);
          popupElement.style.display = "block";
        popupimg.src = event.target.src;

   }
})


           /*  popupElement.style.position = 'absolute';
            popupElement.style.left = '50%';
            popupElement.style.transform = 'translateX(-50%)';
            popupElement.style.top = '-250px'; */


    
/*     function hidepopupElement(){
        const theImg = document.querySelectorAll('.show img');
        clearTimeout(timer);
        CaretPosition.classlist.remove('visible');
        theImg.className = 'start';
    } */

});