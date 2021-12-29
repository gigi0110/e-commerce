//Función catálogo de productos//

const productos = [];
const URL_PRODUCTOS = "productos.json"

$(document).ready(function() {
    $.get(URL_PRODUCTOS, (respuesta, estado) => {
        if (estado === "success") {
            productos.push(...respuesta);
            $(".row").append("<div id='contenidoGenerado'></div>");
            for (const dato of productos) {
                $(".row").append(`<div class="col-sm">
                                                 <div class="card" style="width: 18rem;">
                                                <img class="producto" src="${dato.imagen}" alt="..">
                                                <div class="card-body">
                                                <h4 class="card-title">${dato.nombre}</h4>
                                                <p class="card-text">${dato.texto}</p>
                                                <h6 class="card-text">Categoría: ${dato.categoria}</h6>
                                                <h6 class="card-text">Evento: ${dato.fiesta}</h6>
                                                <h5 class="precio-producto-en-carrito"><b>$ ${dato.precio}.-</b></h5>
                                            <div><button onclick="agregarAlCarro({id: ${dato.id}, fiesta:'${dato.fiesta}', categoria:'${dato.categoria}', 
                                            nombre:'${dato.nombre}', texto:'${dato.texto}', precio: ${dato.precio}});" class="btn btn-primary btn-agregar">agregar</button></div> 
                                            </div></div>`);
            }
        }
    });
});

//Función filtrar productos//

$(".busqueda").prepend("<div><input id='busqueda' type='text'></div><hr> ");

function filtrarProductos(lista) {
    $(".row").empty();
    for (const dato of lista) {
        $(".row").append(`<div class="col-sm">
                            <div class="card" style="width: 18rem;">
                            <img class="producto" src="${dato.imagen}" alt="..">
                            <div class="card-body">
                            <h4 class="card-title">${dato.nombre}</h4>
                            <p class="card-text">${dato.texto}</p>
                            <h6 class="card-text">Categoría: ${dato.categoria}</h6>
                            <h6 class="card-text">Evento: ${dato.fiesta}</h6>
                            <h5 class="precio-producto-en-carrito"><b>$ ${dato.precio}.-</b></h5>
                            <div><button onclick="agregarAlCarro({id: ${dato.id}, fiesta:'${dato.fiesta}', categoria:'${dato.categoria}', 
                            nombre:'${dato.nombre}', texto:'${dato.texto}', precio: ${dato.precio}});" class="btn btn-primary btn-agregar">agregar</button></div> 
                            </div></div>`);
    }
}

$('#busqueda').keyup(function(e) {
    if (productos.length > 0) {
        let value = e.target.value;
        let filtrados = productos.filter(dato =>
            dato.nombre.includes(value) ||
            dato.categoria.includes(value) ||
            dato.texto.includes(value) ||
            dato.fiesta.includes(value));
        if (filtrados.length > 0) {
            filtrarProductos(filtrados);
        } else {
            filtrarProductos(productos);
        }
    }
});