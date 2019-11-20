var btnAbrirFormaPago = document.getElementById("abrirFormaPago");
var overlay = document.getElementById("overlay");
var formaPago = document.getElementById("formaPago");
var btnCerrarFormaPago = document.getElementById("cerrarFormaPago");


// btnAbrirFormaPago.addEventListener("click",function(){
    
    let tarjetaInput = document.getElementById("creditCardNumber");
   let codigoInput = document.getElementById("creditCardSecurityCode");
   let vencimientoInput = document.getElementById("dueDate");
   let cuentaInput = document.getElementById("bankAccountNumber");
   var datosCorrectos = true;


//    document.getElementById("creditCardPaymentRadio").addEventListener("click",function(){
    // if(tarjetaInput.value === '')
    // {
        // tarjetaInput.classList.add('is-invalid');
        // datosCorrectos = false;
    // }
    // if(codigoInput.value === '')
    // {
        // codigoInput.classList.add('is-invalid');
        // datosCorrectos = false;
    // }
    // if(vencimientoInput.value === '')
    // {
        // vencimientoInput.classList.add('is-invalid');
        // datosCorrectos = false;
    // }
    // });
    // document.getElementById("bankingRadio").addEventListener("click",function(){
    // if(cuentaInput.value === '')
    // {
        // cuentaInput.classList.add('is-invalid');
        // datosCorrectos = false;
    // }
//    if(datosCorrectos === false)
//    {
    //    alert("Debe ingresar una forma de pago.")
//    } 
//   });
//    if(datosCorrectos === true)
//    {
        //   overlay.classList.add("active");
        // formaPago.classList.add("active");
//    }
// });

btnCerrarFormaPago.addEventListener("click",function(){

    overlay.classList.remove("active");
    formaPago.classList.remove("active");
});
