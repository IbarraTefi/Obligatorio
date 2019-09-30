var product = {};

function showImagesGallery(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let images = array[i]; 

            htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productInfoImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let infoNameHTML  = document.getElementById("infoName");
            let infoDescriptionHTML = document.getElementById("infoDescription");
            let productCostHTML = document.getElementById("productCost");
            let productInfoSoldCountHTML = document.getElementById("infoSoldCount");
            let productInfoCategoryHTML = document.getElementById("infoCategory");
        
            infoNameHTML.innerHTML = product.name;
            infoDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + ` ` + product.cost;
            productInfoSoldCountHTML.innerHTML = product.soldCount;
            productInfoCategoryHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});