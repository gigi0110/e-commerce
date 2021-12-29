//Funcion animacion//

$(() => {

    //Animacion logo//

    $("#logo").animate({ opacity: "toggle", height: "toggle" }, "slow");

    //Animacion vaciar carro//

    $(".btn-vaciar").click(function() {
        $(".carro").animate({ opacity: "toggle", height: "toggle" }, "fast");
        $(".carro").slideDown("fast");
    });
})