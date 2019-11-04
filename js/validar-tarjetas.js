var reglas = [];
var numTarjeta = document.getElementById("creditCardNumber");

// Visa
var reglaVisa = "4(?:[0-9]{12}|[0-9]{15})"
reglas = [{nombre:"Visa", validador: reglaVisa, img:"visa.png"}]

// MasterCard
var reglaMasterCard = "5[1-5][0-9]{14}"
reglas = reglas.concat([{nombre:"MasterCard", validador:reglaMasterCard, img:"MasterCard.jpg"}])

function validarTarjeta(numTarjeta){
    var Card = null;
    var value = String(numTarjeta).replace(/[- ]/g,'');
    reglas.forEach(tarjeta => {
        if(value.match(tarjeta.validador)){
            Card = tarjeta;
        }
    });
    return Card
}