
let productCount = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const BANKING_PAYMENT = "Transferencia bancaria";
const SINFP = "No se seleccionó ninguna forma de pago";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";
let artBuy = 0;
var btnAbrirFormaPago = document.getElementById("abrirFormaPago");
var overlay = document.getElementById("overlay");
var formaPago = document.getElementById("formaPago");


// Función para calcular los costos.
function updateCost(){

let subTotalHTML = document.getElementById("subTotal");
let comissionCostHTML = document.getElementById("comission");
let totalCostHTML = document.getElementById("totalCost");
// let aPagarHTML = document.getElementById("aPagar");

subtotal = productUnitCost * artBuy;
let comissionToShow = Math.round((shippingPercentage * productUnitCost * artBuy));
total = subtotal + comissionToShow;

subTotalHTML.innerHTML = productCurrency + subtotal;
comissionCostHTML.innerHTML = productCurrency + comissionToShow;
totalCostHTML.innerHTML = productCurrency + total;

}

function showArticles(articles){
    let htmlContentToAppend = "";

    for(let i = 0; i < articles.length; i++){
        let articulo = articles[i];

        htmlContentToAppend += `
        
        <hr>
        <div class="container">
            <div class="row" id"vistaCarrito">
                <div class="col-sm"><h4>Producto</h4></div>
                <div class="col-sm"><h4>Nombre</h4></div>
                <div class="col-sm"><h4>Precio unitario</h4></div>
            </div>
        </div>
        <hr>
        <div class="container">
        <div class="row" id="datosCarrito">
            <div class="col-sm"><img src="` + articulo.src + `" alt="` + articulo.name + ` class="img-thumbnail" width="20%"></div>
            <div class="col-sm">` + articulo.name +`</div>
            <div class="col-sm">` + articulo.currency + articulo.unitCost + `</div>
        </div>
    </div>
        `
    }
    document.getElementById("art-list-container").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok"){

            infoArticle = resultObj.data.articles;
            productUnitCost = infoArticle[0].unitCost;
            productCurrency = infoArticle[0].currency;

            showArticles(infoArticle);
            
            artBuy = infoArticle[0].count;
            let subTotalHTML = document.getElementById("subTotal");
            subTotalHTML.innerHTML = productCurrency + (productUnitCost * artBuy);
            let comissionCostHTML = document.getElementById("comission");
            comissionCostHTML.innerHTML = productCurrency + (shippingPercentage * productUnitCost * artBuy);
            let totalCostHTML = document.getElementById("totalCost");
            totalCostHTML.innerHTML = productCurrency + ((productUnitCost * artBuy) + (shippingPercentage * productUnitCost * artBuy));

            let articleCountHTML = document.getElementById("articleCountInput");
            articleCountHTML.value = artBuy;

        }
        
        

    document.getElementById("articleCountInput").addEventListener("change", function(){
        artBuy = this.value;
        
        updateCost();
    });


    document.getElementById("premiumradio").addEventListener("click", function(){
        shippingPercentage = 0.15;
        updateCost();
    });
    
    document.getElementById("expresradio").addEventListener("click", function(){
        shippingPercentage = 0.07;
        updateCost();
    });

    document.getElementById("standardradio").addEventListener("click", function(){
        shippingPercentage = 0.05;
        updateCost();
    });
    

    document.getElementById("bankingRadio").addEventListener("click",function(){
        document.getElementById("bankAccountNumber").removeAttribute("disabled");
        document.getElementById("creditCardNumber").setAttribute("disabled","disabled");
        document.getElementById("creditCardSecurityCode").setAttribute("disabled","disabled");
        document.getElementById("dueDate").setAttribute("disabled","disabled");
        document.getElementById("formaDePago").innerHTML = BANKING_PAYMENT;
        document.getElementById("bankAccountNumber").setAttribute("required","");
        document.getElementById("creditCardNumber").removeAttribute("required","");
        document.getElementById("creditCardSecurityCode").removeAttribute("required","");
        document.getElementById("dueDate").removeAttribute("required","");
        document.getElementById("creditCardNumber").classList.remove('is-invalid');
        document.getElementById("creditCardSecurityCode").classList.remove('is-invalid');
        document.getElementById("dueDate").classList.remove('is-invalid');
        document.getElementById("creditCardNumber").value = "";
        document.getElementById("creditCardSecurityCode").value  = "";
        document.getElementById("dueDate").value = "";

        

        btnAbrirFormaPago.addEventListener("click",function(){
           
           let cuentaInput = document.getElementById("bankAccountNumber");
           var datosCorrectos = true;

           document.getElementById("creditCardNumber").classList.remove('is-invalid');
           document.getElementById("creditCardSecurityCode").classList.remove('is-invalid');
           document.getElementById("dueDate").classList.remove('is-invalid');

            if(cuentaInput.value === '')
            {
                cuentaInput.classList.add('is-invalid');
                datosCorrectos = false;
            }
                if(datosCorrectos === true)
            {
                overlay.classList.add("active");
                formaPago.classList.add("active");
            }
        });

    });

    document.getElementById("creditCardPaymentRadio").addEventListener("click",function(){
        document.getElementById("bankAccountNumber").setAttribute("disabled","disabled");
        document.getElementById("creditCardNumber").removeAttribute("disabled");
        document.getElementById("creditCardSecurityCode").removeAttribute("disabled");
        document.getElementById("dueDate").removeAttribute("disabled");
        document.getElementById("bankAccountNumber").removeAttribute("required","");
        document.getElementById("creditCardNumber").setAttribute("required","");
        document.getElementById("creditCardSecurityCode").setAttribute("requied","");
        document.getElementById("dueDate").setAttribute("requierd","");
        document.getElementById("bankAccountNumber").classList.remove('is-invalid');
        document.getElementById("bankAccountNumber").value = "";
        

        btnAbrirFormaPago.addEventListener("click",function(){

            document.getElementById("bankAccountNumber").classList.remove('is-invalid');
    
           let tarjetaInput = document.getElementById("creditCardNumber");
           let codigoInput = document.getElementById("creditCardSecurityCode");
           let vencimientoInput = document.getElementById("dueDate");
           let msjTarjeta = document.getElementById("msjTarjeta");
           var datosCorrectos = true;


            if(tarjetaInput.value === '')
            {
                tarjetaInput.classList.add('is-invalid');
                msjTarjeta.innerHTML = "Debe ingresar un número de tarjeta."
                datosCorrectos = false;
            } else{
                // Visa
                var reglaVisa = "^4[0-9]{6,}$"

                // MasterCard
                var reglaMasterCard = "5[1-5][0-9]{14}$"
    
                if (tarjetaInput.value.match(reglaVisa)){
                formaDePago.innerHTML = "Tarjeta de crédito Visa";
                } else if (tarjetaInput.value.match(reglaMasterCard)){
                formaDePago.innerHTML = "Tarjeta de crédito MasterCard";
                } else {
                tarjetaInput.classList.add('is-invalid');
                datosCorrectos = false;
                msjTarjeta.innerHTML = "No trabajamos con esta tarjeta";
                }
  

            }
  
            if(codigoInput.value === '')
            {
                codigoInput.classList.add('is-invalid');
                datosCorrectos = false;
            }
            if(vencimientoInput.value === '')
            {
                vencimientoInput.classList.add('is-invalid');
                datosCorrectos = false;
            } else{ //Verifica que las fechas ingresadas sean correctas.

                var mes = parseInt(vencimientoInput.value.substr(0,2));
                var anio = parseInt(vencimientoInput.value.substr(3,4));
                var mesActual = new Date().getMonth()+1;
                var anioActual = new Date().getFullYear();
                var msjError = document.getElementById("msjError");


    if(isNaN(mes) || isNaN(anio)) 
    {
        document.getElementById("dueDate").classList.add('is-invalid');
        msjError.innerHTML = "Debe ingresar un número."
        datosCorrectos = false;
    }
    if(anio < anioActual)
    {
        document.getElementById("dueDate").classList.add('is-invalid');
        msjError.innerHTML = "La fecha no es correcta."
        datosCorrectos = false;
    } 
    if(anio === anioActual && (mes < mesActual || mes > 12))
    {
        document.getElementById("dueDate").classList.add('is-invalid');
        msjError.innerHTML = "La fecha no es correcta."
        datosCorrectos = false;
    } 
    if (mes > 12)
    {
        document.getElementById("dueDate").classList.add('is-invalid');
        msjError.innerHTML = "La fecha no es correcta."
        datosCorrectos = false;
    }
            }
                if(datosCorrectos === true)
            {
                
                overlay.classList.add("active");
                formaPago.classList.add("active");
            }
            });
    });
    });

    btnAbrirFormaPago.addEventListener("click", function(){
        if(!document.getElementById("creditCardPaymentRadio").checked && !document.getElementById("bankingRadio").checked){
            alert("Debe seleccionar una forma de pago.")
        }
    });
});

