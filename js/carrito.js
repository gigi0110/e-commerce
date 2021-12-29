//Funcion agregar productos al carro//

function agregarAlCarro(producto) {

    let encontrado = false;

    carrito = carrito.map((item) => {
        if (item.id == producto.id) {
            encontrado = true;
            return { id: item.id, fiesta: item.fiesta, categoria: item.categoria, nombre: item.nombre, precio: item.precio, cantidad: parseInt(item.cantidad) + 1, subtotal: (parseInt(item.cantidad) + 1) * parseInt(item.precio) }

        } else {
            return item
        }
    });

    if (!encontrado) {
        producto.cantidad = 1
        producto.subtotal = producto.precio;
        producto.total = (producto.subtotal * producto.cantidad);
        carrito.push(producto);
    }

    mostrarCarro();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Funcion mostrar carro//

function mostrarCarro() {
    $("#div-carrito").html('');
    let precioTotal = carrito.reduce((total, item) => {
        return total + item.subtotal
    }, 0);
    for (const producto of carrito) {
        $("#div-carrito").append(`<div>
         <h6> <b>${producto.nombre}</b>: Cantidad ${producto.cantidad} - Precio Unitario: $ ${producto.precio} - Sub-Total: <b>$ ${producto.subtotal}.-</b> <button class="btn btn-danger" onclick="borrarProducto(${producto.id})">eliminar</button></h6>
        <hr>
        </div>`);
    }
    if (precioTotal == 0) {
        $("#div-carrito").html('');
    } else {
        $("#div-carrito").append(`<div>
    <h6><b>TOTAL: $ ${precioTotal} </b><button class="btn btn-success" onclick="comprarCarro()">comprar</button></h6>
    </div>`);
    }
}

//Funcion borrar productos del carro//

function borrarProducto(id) {

    carrito = carrito.filter((item) => item.id !== id);

    mostrarCarro();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Funcion comprar carro//

function comprarCarro() {
    $("#div-carrito2").html('');
    $("#div-carrito2").append(`<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Gracias por tu compra!</h4>
    <p>En 2 días tu compra será entregada en tu domicilio.</p>
    <hr>
    <p class="mb-0">Te esperamos nuevamente. :-) </p>
  </div>`);
}

//Funcion vaciar carro//

function vaciarCarro() {
    carrito = [];
    localStorage.setItem('carrito', '[]');
    $("#div-carrito").html('');
    $("#div-carrito2").html('');
}