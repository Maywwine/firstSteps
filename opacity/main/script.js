const termin = document.querySelector('.btn');
const close = document.querySelector('.close');
const page = document.querySelector('.second-page');

termin.addEventListener('click', ()=> page.classList.add('opacity'));
close.addEventListener('click', ()=>
    page.classList.remove('opacity'));

