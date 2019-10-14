
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

let subTotalCostToShow = (productUnitCost * productCount);

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
        <table border="1">
        <tbody>
        <tr>
        <td align="center">
        <h5> <strong>Producto<strong></h5>
        </td>
        <td align="center">
        <h5><strong>Nombre<strong></h5>
        </td>
        <td align="center">
        <h5><strong>Stock<strong></h5>
        </td>
        <td align="center">
        <h5><strong>Precio unitario<strong></h5>
        </td>
        </tr>
        <tr>
        <td align="center">
                <img src="` + articulo.src + `" alt="` + articulo.name + ` class="img-thumbnail" width="30%">
        </td>
        <td align="center">
                        <h6 class="mb-1">` + articulo.name +`</h6>
        </td>
        <td align="center">  
                <h6 class="mb-1" id="stock">` + articulo.count + `</h6>
        </td>
        <td align="center">
            <h6 class="mb-1" id="precio">` + articulo.unitCost + `</h6> 
        </td>
        </tbody>
        </table>
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

            showArticles(infoArticle);

        }
    });

    document.getElementById("articleCountInput").addEventListener("change", function(){
        productCount = this.value;
        
        updateSubtotal();
    });

});