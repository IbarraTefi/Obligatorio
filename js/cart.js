
let productCount = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    
}

function updateSubtotal(){

let subTotalHTML = document.getElementById("subTotal");

let subTotalCostToShow = productCurrency + (productUnitCost * artBuy);

subTotalHTML.innerHTML = subTotalCostToShow;
    
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

        }
        
    });


    document.getElementById("articleCountInput").addEventListener("change", function(){
        artBuy = this.value;
        
        updateSubtotal();
    });
});