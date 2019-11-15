
var hoy = new Date();
var formaDePago = document.getElementById("formaDePago");


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

document.getElementById("dueDate").addEventListener("change",function(){
    var vencimiento = this.value;
    if (Date.parse(vencimiento)<hoy){
        alert("La fecha ingresada no es correcta");
    }
});
