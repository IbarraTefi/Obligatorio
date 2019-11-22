
var hoy = new Date();
var formaDePago = document.getElementById("formaDePago");
var btnComprar = document.getElementById("abrirFormaPago")


// Visa
var reglaVisa = "^4[0-9]{6,}$"

// MasterCard
var reglaMasterCard = "5[1-5][0-9]{14}$"



document.getElementById("creditCardNumber").addEventListener("change",function(){
    numTarjeta = this.value;
    
    if (numTarjeta.match(reglaVisa)){
        formaDePago.innerHTML = "Tarjeta de crédito Visa";
    } else if (numTarjeta.match(reglaMasterCard)){
        formaDePago.innerHTML = "Tarjeta de crédito MasterCard";
    } else {
        alert("No trabajamos con esta tarjeta");
    }
  
}); 


document.getElementById("profile-tab").addEventListener("click",function(){

    let calleInput = document.getElementById("calle");
    let nPuertaInput = document.getElementById("nPuerta");
    let paisInput = document.getElementById("pais");
    let esquinaInput = document.getElementById("esquina");
    let emailInput = document.getElementById("eMailInput");
    var datosCorrectos = true;

    if (calleInput.value === '')
    {
        calleInput.classList.add('is-invalid');
        datosCorrectos = false;
    }
    
    if (nPuertaInput.value === '')
    {
        nPuertaInput.classList.add('is-invalid');
        datosCorrectos = false;
    }

    if (paisInput.value === '')
    {
        paisInput.classList.add('is-invalid');
        datosCorrectos = false;
    }

    if (esquinaInput.value === '')
    {
        esquinaInput.classList.add('is-invalid');
        datosCorrectos = false;
    }
    if (emailInput.value === '')
    {
        emailInput.classList.add('is-invalid');
        datosCorrectos = false;
    } else {
        document.getElementById("eMail").innerHTML = emailInput.value;
    }
    if(datosCorrectos === false){
        alert("Debe completar datos de envío.");
    }
    
});





