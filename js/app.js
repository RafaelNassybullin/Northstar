let menu = document.querySelector('.nav-list');
let burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    menu.classList.toggle('visible');
})