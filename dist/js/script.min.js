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
let infoBlocks = document.querySelectorAll('.main-content .info-block');
console.log(infoBlocks);
for(let block of infoBlocks){
    block.addEventListener('mouseenter', function(e){
        e.target.classList.remove('not-hover');
        e.target.classList.add('hover');
    })
    block.addEventListener('mouseleave', function(e){
        e.target.classList.remove('hover');
        e.target.classList.add('not-hover');
    })
};