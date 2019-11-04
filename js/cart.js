
let productCount = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
const SINFP = "No se seleccionó ninguna forma de pago";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";


// Función para calcular los costos.
function updateCost(){

let subTotalHTML = document.getElementById("subTotal");
let comissionCostHTML = document.getElementById("comission");
let totalCostHTML = document.getElementById("totalCost");
let aPagarHTML = document.getElementById("aPagar");

subtotal = productUnitCost * artBuy;
let comissionToShow = Math.round((shippingPercentage * subtotal));
total = subtotal + comissionToShow;

subTotalHTML.innerHTML = productCurrency + subtotal;
comissionCostHTML.innerHTML = productCurrency + comissionToShow;
totalCostHTML.innerHTML = productCurrency + total;
aPagarHTML.innerHTML = productCurrency + total;

}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){
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
    <hr>
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
            
            let artBuy = document.getElementById("articleCountInput");
            artBuy.value = infoArticle[0].count;
            let subTotalHTML = document.getElementById("subTotal");
            subTotalHTML.innerHTML = productCurrency + (productUnitCost * artBuy.value);
            let comissionCostHTML = document.getElementById("comission");
            comissionCostHTML.innerHTML = productCurrency + (shippingPercentage * productUnitCost * artBuy.value);
            let totalCostHTML = document.getElementById("totalCost");
            totalCostHTML.innerHTML = productCurrency + ((productUnitCost * artBuy.value) + (shippingPercentage * productUnitCost * artBuy.value));

        }
        
    });


    document.getElementById("articleCountInput").addEventListener("change", function(){
        artBuy = this.value;
        
        updateCost();
    });


    document.getElementById("premiumradio").addEventListener("change", function(){
        shippingPercentage = 0.15;
        updateCost();
    });
    
    document.getElementById("expresradio").addEventListener("change", function(){
        shippingPercentage = 0.07;
        updateCost();
    });

    document.getElementById("standardradio").addEventListener("change", function(){
        shippingPercentage = 0.05;
        updateCost();
    });

    document.getElementById("bankingRadio").addEventListener("click",function(){
        document.getElementById("bankAccountNumber").removeAttribute("disabled");
        document.getElementById("creditCardNumber").setAttribute("disabled","disabled");
        document.getElementById("creditCardSecurityCode").setAttribute("disabled","disabled");
        document.getElementById("dueDate").setAttribute("disabled","disabled");
    });

    document.getElementById("creditCardPaymentRadio").addEventListener("click",function(){
        document.getElementById("bankAccountNumber").setAttribute("disabled","disabled");
        document.getElementById("creditCardNumber").removeAttribute("disabled");
        document.getElementById("creditCardSecurityCode").removeAttribute("disabled");
        document.getElementById("dueDate").removeAttribute("disabled");
    })

});