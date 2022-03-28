// Script swiper SECTION 6
const swiperSection6 = new Swiper(".swiper-section6", {
    // slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Script swiper ARTICLE
const swiperArticle = new Swiper(".swiper-article", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // cssMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


// Fonction pour calcul de la hauteur et correction sur mobile
const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', appHeight);
appHeight();





// // Script pour changer couleur header gauche au scroll
// const buttonBook = document.querySelector('.button-book');

// // Fonction
// function scrollFunction(){
//     // console.log('ok');
//     if( window.pageYOffset > 500 ){
//         if(!buttonBook.classList.contains('scroll-color-button')){
//             buttonBook.classList.add('scroll-color-button');
//         }
//     }else{
//         if(buttonBook.classList.contains('scroll-color-button')){
//             buttonBook.classList.remove('scroll-color-button');
//         }
//     }
// }
// // Ecouter d'évt
// window.addEventListener('scroll', scrollFunction);





const burger1 = document.querySelector('.bar-1');
const burger2 = document.querySelector('.bar-2');
const burger3 = document.querySelector('.bar-3');
const menu = document.querySelector('.menu');

// Fonction sur bar 1
function scrollFunctionBurger1Black(){
    // console.log('ok');
    if( window.pageYOffset > 500 ){
        if(!burger1.classList.contains('scroll-color-burger-black')){
            burger1.classList.add('scroll-color-burger-black');
        }
    }else{
        if(burger1.classList.contains('scroll-color-burger-black')){
            burger1.classList.remove('scroll-color-burger-black');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger1Black);


// Fonction sur bar 2
function scrollFunctionBurger2Black(){
    if( window.pageYOffset > 500 ){
        if(!burger2.classList.contains('scroll-color-burger-black')){
            burger2.classList.add('scroll-color-burger-black');
        }
    }else{
        if(burger2.classList.contains('scroll-color-burger-black')){
            burger2.classList.remove('scroll-color-burger-black');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger2Black);


// Fonction sur bar 3
function scrollFunctionBurger3Black(){
    if( window.pageYOffset > 500 ){
        if(!burger3.classList.contains('scroll-color-burger-black')){
            burger3.classList.add('scroll-color-burger-black');
        }
    }else{
        if(burger3.classList.contains('scroll-color-burger-black')){
            burger3.classList.remove('scroll-color-burger-black');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger3Black);



function scrollFunctionBurger1White(){
    if( window.pageYOffset < 500 ){
        if(!burger1.classList.contains('scroll-color-burger-white')){
            burger1.classList.add('scroll-color-burger-white');

        }
    }else{
        if(burger1.classList.contains('scroll-color-burger-white')){
            burger1.classList.remove('scroll-color-burger-white');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger1White);

function scrollFunctionBurger2White(){
    if( window.pageYOffset < 500 ){
        if(!burger2.classList.contains('scroll-color-burger-white')){
            burger2.classList.add('scroll-color-burger-white');

        }
    }else{
        if(burger2.classList.contains('scroll-color-burger-white')){
            burger2.classList.remove('scroll-color-burger-white');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger2White);

function scrollFunctionBurger3White(){
    if( window.pageYOffset < 500 ){
        if(!burger3.classList.contains('scroll-color-burger-white')){
            burger3.classList.add('scroll-color-burger-white');

        }
    }else{
        if(burger3.classList.contains('scroll-color-burger-white')){
            burger3.classList.remove('scroll-color-burger-white');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionBurger3White);



// Fonction sur menu
function scrollFunctionMenuBlack(){
    if( window.pageYOffset > 500 ){
        if(!menu.classList.contains('scroll-color-menu-black')){
            menu.classList.add('scroll-color-menu-black');
        }
    }else{
        if(menu.classList.contains('scroll-color-menu-black')){
            menu.classList.remove('scroll-color-menu-black');
        }
    }
}
// Ecouter d'évt
window.addEventListener('scroll', scrollFunctionMenuBlack);


// AOS.init();




// Fonction pour changer le style couleur du burger
// function scrollFunctionBurger(){
//     if( window.pageYOffset > 500 ){
//         (document.querySelector('.bar-1')).style.backgroundColor = 'red';
//         (document.querySelector('.bar-2')).style.backgroundColor = 'red';
//         (document.querySelector('.bar-3')).style.backgroundColor = 'red';
//         (document.querySelector('.menu')).style.color = 'red';
//     }else{
//         (document.querySelector('.bar-1')).style.backgroundColor = 'green';
//         (document.querySelector('.bar-2')).style.backgroundColor = 'green';
//         (document.querySelector('.bar-3')).style.backgroundColor = 'green';
//         (document.querySelector('.menu')).style.color = 'green';
//     }
// }
// window.addEventListener('scroll', scrollFunctionBurger);

// // Fonction pour rendre transparent la bar2 et menu au click
// let burgerElt = document.querySelector('.burger');
// let bar2Elt = document.querySelector('.bar-2');

// function clickFunctionBurger(){
//     bar2Elt.classList.toggle('.click-burger-bar');
// }
// burgerElt.addEventListener('click', clickFunctionBurger);