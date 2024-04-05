
let offset = 0;
let offsetSteps = 0;
const slider = document.querySelectorAll('.slider-child')
const sliderSteps = document.querySelectorAll('.steps-cards__item')
const countVisibleSteps = document.querySelectorAll('.count__visible-point')
const countPoints = document.querySelectorAll('.count-point')
const countVisible = document.querySelector('.count__visible')



//Описание слайдеров


//Слайдер на этапы:

function count(elem, step) {
    switch (elem) {
        case 0:
            return countVisible.innerHTML = '3';
        case -step:
            return countVisible.innerHTML = '4';
        case -step*2:
            return countVisible.innerHTML = '5';
        case -step*3:
            return countVisible.innerHTML = '6';

    }
};
document.querySelector('.players__button-next').addEventListener('click', () => {
    let step = 41.5 //значение шага перемещения в rem
    offset -= step;
    if (offset < -step*3) { 
        offset = 0;   
    }
    count(offset, step);
    slider.forEach(element => {
        element.style.left = offset + 'rem';
    });
})
document.querySelector('.players__button-prev').addEventListener('click', () => {
    clearInterval(autoClick); //Остановка автоклика при нажатии на кнопку
    let step = 41.5 //значение шага перемещения в rem
    offset += step; 
    if (offset > 0) { 
        offset = -step*3;   
    }
    count(offset, step);
    slider.forEach(element => {
        element.style.left = offset + 'rem';
    });
})


//Слайдер на игроков:

let but = document.querySelector('.players__button-next');


document.querySelector('.button-next').addEventListener('click', () => {
    
    let step = 37.5;  //значение шага перемещения в rem
    offsetSteps -= step;
    if (offsetSteps < -180) { 
        offsetSteps = 0;   
    }
    sliderSteps.forEach(element => {
        element.style.left = offsetSteps + 'rem';
    })
    switch (offsetSteps) {
        case 0:
            countPoints[0].classList.add("active-point");
            countPoints[4].classList.remove("active-point");
            
        break;
        case -step:
            countPoints[0].classList.remove("active-point");
            countPoints[1].classList.add("active-point");
            document.querySelector('.button-prev').classList.remove('button--inactive') //делаем кнопку обычной когда она изсменяет начальное положение
        break;
        case -step*2:
            countPoints[1].classList.remove("active-point");
            countPoints[2].classList.add("active-point");
        break;
        case -step*3:
            countPoints[2].classList.remove("active-point");
            countPoints[3].classList.add("active-point");
        break;
        case -step*4:
            document.querySelector('.button-next').classList.add('button--inactive') //делаем кнопку прозрачной когда она приходит в начальное положение
            countPoints[3].classList.remove("active-point");
            countPoints[4].classList.add("active-point");
        break;
    };
})
document.querySelector('.button-prev').addEventListener('click', () => {
    let step = 37.5;  //значение шага перемещения в rem
    offsetSteps += step;
    if (offsetSteps > 0) { 
        offsetSteps = -148;   
    }
    switch (offsetSteps) {
        case 0:
            document.querySelector('.button-prev').classList.add('button--inactive')    //делаем кнопку прозрачной когда она приходит в начальное положение
            countPoints[0].classList.add("active-point");
            countPoints[1].classList.remove("active-point");
        break;
        case -step:
            countPoints[1].classList.add("active-point");
            countPoints[2].classList.remove("active-point");
        break;
        case -step*2:
            countPoints[2].classList.add("active-point");
            countPoints[3].classList.remove("active-point");
            
        break;
        case -step*3:
            countPoints[3].classList.add("active-point");
            countPoints[4].classList.remove("active-point");
            document.querySelector('.button-next').classList.remove('button--inactive') //делаем кнопку обычной когда она изменяет начальное положение
        break;
        case -step*4:
            countPoints[4].classList.add("active-point");
            countPoints[0].classList.remove("active-point");
        break;
    };
    sliderSteps.forEach(element => {
        element.style.left = offsetSteps + 'rem';
    });
})

//Плавный скролл до якорей:
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Автоклик на слайдер игроков каждые 4 секунды
const autoClick = setInterval(() => {
    but.click();
},4000);
autoClick();