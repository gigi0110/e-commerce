//Función que llama a la API//

function funcionQueLlamaALaApi() {
    $(".rowApi").empty();
    $.get("https://date.nager.at/api/v3/publicholidays/2022/" + $('#miIngreso').val(), function(respuesta, estado) {
        //Ej: Código de Argentina: AR //
        if (estado === "success") {
            for (const { date, localName, countryCode }
                of respuesta) {
                $(".rowApi").append(`<div class="card col-sm-3 m-1">
                <div class="h5">${date}</div>
                <div class="h4"><b>${localName}</b></div>
                <div class="h6">${countryCode}</div>
                </div>`);
            }
        }
    })
}