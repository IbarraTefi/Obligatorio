var btnAbrirFormaPago = document.getElementById("abrirFormaPago");
var overlay = document.getElementById("overlay");
var formaPago = document.getElementById("formaPago");
var btnCerrarFormaPago = document.getElementById("cerrarFormaPago");


btnAbrirFormaPago.addEventListener("click",function(){
    overlay.classList.add("active");
    formaPago.classList.add("active");
});

btnCerrarFormaPago.addEventListener("click",function(){
    overlay.classList.remove("active");
    formaPago.classList.remove("active");
});
