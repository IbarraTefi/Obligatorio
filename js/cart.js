
let productCount = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";
let contador = 1;

// Función para aumentar o disminuir cantidades
function aumentarCantidad(){ 
    contador = contador + 1; 
    artBuy = document.getElementById("articleCountInput"); 
    artBuy.value = contador;
}

function disminuirCantidad(){ 
    if(contador>=2){
        contador = contador - 1; 
        artBuy = document.getElementById("articleCountInput"); 
        artBuy.value = contador;
    }
}

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    
}

function updateSubtotal(){

let subTotalHTML = document.getElementById("subTotal");

let subTotalCostToShow = productCurrency + (productUnitCost * productCount);

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
        <div class="container" id="vistaCarrito">
            <div class="row">
                <div class="col-6 col-md-4">Producto</div>
                <div class="col-6 col-md-4">Nombre</div>
                <div class="col-6 col-md-4">Precio unitario</div>
            </div>
        </div>
        <hr>
        <div class="container" id="datosCarrito">
        <div class="row">
            <div class="col-6 col-md-4"><img src="` + articulo.src + `" alt="` + articulo.name + ` class="img-thumbnail" width="20%"></div>
            <div class="col-6 col-md-4">` + articulo.name +`</div>
            <div class="col-6 col-md-4">` + articulo.currency + articulo.unitCost + `</div>
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
            artBuy = infoArticle[0].count;
            productCurrency = infoArticle[0].currency;

            showArticles(infoArticle);

        }
    });


    document.getElementById("aumentar").addEventListener("click", function(){
        productCount = document.getElementById("articleCountInput").value;
        
        updateSubtotal();
    });
    
    document.getElementById("disminuir").addEventListener("click", function(){
        productCount = document.getElementById("articleCountInput").value;
        
        updateSubtotal();
    });
});