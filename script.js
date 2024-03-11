const navEl = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', ()=>{
    navEl.classList.toggle('nav__open')
    hamburgerEL.classList.toggle('hamburger__open')
})
navEl.addEventListener('click', ()=>{
    navEl.classList.remove('nav__open')
    hamburgerEL.classList.remove('hamburger__open')
})