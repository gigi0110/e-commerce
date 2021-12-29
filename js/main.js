let carrito = [];

$(document).ready(function() {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        mostrarCarro();
    }
});