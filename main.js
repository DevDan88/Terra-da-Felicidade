var menuIcon = document.querySelector('.menu-icon');
var lista = document.querySelector('.lista');

menuIcon.addEventListener('click', ()=>{

    if(lista.classList.contains('ativo')){
        lista.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }else{
        lista.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }

})