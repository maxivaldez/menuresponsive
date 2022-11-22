let menu = document.querySelector('nav');
let botonAbrir = document.querySelector('.menu-abrir');
let botonCerrar = document.querySelector('.menu-cerrar');

function abrirMenu () {
	menu.classList.add('activo');
}

function cerrarMenu () {
	menu.classList.remove('activo');
}

botonAbrir.addEventListener('click', abrirMenu);
botonCerrar.addEventListener('click', cerrarMenu);


let mediaqueryList = window.matchMedia("(min-width: 1024px)");

if(!mediaqueryList.matches) {
	$(document).ready(function(){
		$('.sub-btn').click(function(){
			$(this).next('.sub-menu').slideToggle();
		});
	});
};
