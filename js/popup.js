
var overlay = document.getElementById("overlay");
var formaPago = document.getElementById("formaPago");
var btnCerrarFormaPago = document.getElementById("cerrarFormaPago");


btnCerrarFormaPago.addEventListener("click",function(){

    overlay.classList.remove("active");
    formaPago.classList.remove("active");
});
