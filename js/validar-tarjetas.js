
var hoy = new Date();

// Visa
var reglaVisa = "^4[0-9]{6,}$"

// MasterCard
var reglaMasterCard = "5[1-5][0-9]{14}$"



document.getElementById("creditCardNumber").addEventListener("change",function(){
    numTarjeta = this.value;
    // if(numTarjeta.length === 16 && numTarjeta[0] === "4"){
        // alert("Tarjeta Visa");
    // }
    // if(numTarjeta.length === 16 && numTarjeta[0] === "5" && (numTarjeta[1] === "0" || numTarjeta[1] === "1" || numTarjeta[1] === "2" || numTarjeta[1] === "3" || numTarjeta[1] === "4" || numTarjeta[1] === "5")){
        // alert("Tarjeta Master Card")
    // }
    // else{
        // alert("No trabajamos con esta tarjeta")
    // }
    if (numTarjeta.match(reglaVisa)){
        alert("Tarjeta Visa");
    } else if (numTarjeta.match(reglaMasterCard)){
        alert("Tarjeta MasterCard");
    } else {
        alert("No trabajamos con esta tarjeta");
    }
  
});
// });

// document.getElementById("dueDate").addEventListener("change",function(){
    // var vencimiento = this.value;
    // validarFecha();
// });

    // function validarFecha(){ 

        // if(Date.parse(vencimiento)< hoy){	
        //  alert("La fecha ingresada es incorrecta"); 
        // } 
