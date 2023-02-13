let menu=document.querySelector('.menu__list');
let burger = document.getElementsByClassName('menu__burger-icon')[0];
let menu_body=document.querySelector('.menu__body');
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        menu_body.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }});
