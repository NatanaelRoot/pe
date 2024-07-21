// Menu de busqueda 

let btnOpenBusqueda = document.querySelector("#open-busqueda");
let menuBusqueda = document.querySelector("#busqueda-dialog");
let btnCloseBusqueda = document.querySelector("#close-busqueda");

btnOpenBusqueda.addEventListener('click', function(){
    menuBusqueda.showModal();
});

btnCloseBusqueda.addEventListener('click', function(){
    menuBusqueda.close();
});



/* Menu hamburguesa */


const contenedorMenu = document.querySelector("#menu-responsive");

document.querySelector('#menu').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorMenu.classList.contains('activo')) {
        contenedorMenu.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
        document.querySelector('body').style.background = 'transparent';
    } else {
        contenedorMenu.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});