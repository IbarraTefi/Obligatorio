
const ORDER_ASC_COST = "MayorPrecio";
const ORDER_DESC_COST = "MenorPrecio";
var currentProductsArray = [];
var currentProdSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;


function sortProducts(criteria,array){
    let result = [];
    if (criteria === ORDER_ASC_COST)
    {
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.cost);
            let bCost = parseInt(b.cost);

            if ( aCost < bCost ) { return -1; }
            if ( aCost > bCost ) { return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_COST){
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.cost);
            let bCost = parseInt(b.cost);
            
            if ( aCost > bCost ) { return -1; }
            if ( aCost < bCost ) { return 1; }
            return 0;
        });
    }
    return result;
}

function showProductsList(){
    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i]; 

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){

            htmlContentToAppend += `
        
      
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <a href="product-info.html">
          <img src="` + product.imgSrc + `" alt="` + product.description + `" class="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
            <div class="card-body">
              <p class="card-text" align="center">`+ product.name +`</p></a>
              <hr>
              <p class="card-text">` + product.description + `</p>
              <div class="d-flex justify-content-between align-items-center">
                <span align="center"> Precio: ` + product.currency + product.cost +`</span>
              </div>
            </div>
            </div>
        </div>   
            `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentProdSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentProdSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultProd){
        if (resultProd.status === "ok"){
            sortAndShowProducts(ORDER_ASC_COST, resultProd.data);
        }
    });

    document.getElementById("MayorPrecio").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_COST);
    });

    document.getElementById("MenorPrecio").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_COST);
    });


    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por costo
        //de productos.
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList();
    });
});