

document.getElementById("profile-tab").addEventListener("click",function(){

    let calleInput = document.getElementById("calle");
    let nPuertaInput = document.getElementById("nPuerta");
    let paisInput = document.getElementById("pais");
    let esquinaInput = document.getElementById("esquina");
    let emailInput = document.getElementById("eMailInput");
    var datosCorrectos = true;

    if (calleInput.value === '')
    {
        calleInput.classList.add('is-invalid');
        datosCorrectos = false;
    }
    
    if (nPuertaInput.value === '')
    {
        nPuertaInput.classList.add('is-invalid');
        datosCorrectos = false;
    }

    if (paisInput.value === '')
    {
        paisInput.classList.add('is-invalid');
        datosCorrectos = false;
    }

    if (esquinaInput.value === '')
    {
        esquinaInput.classList.add('is-invalid');
        datosCorrectos = false;
    }
    if (emailInput.value === '')
    {
        emailInput.classList.add('is-invalid');
        datosCorrectos = false;
    } else {
        document.getElementById("eMail").innerHTML = emailInput.value;
    }
    if(datosCorrectos === false){
        alert("Debe completar datos de envío.");
        document.getElementById("profile-tab").removeAttribute("href");
        document.getElementById("profile-tab").removeAttribute("data-toggle");
    }else{
        document.getElementById("profile-tab").setAttribute('href','#profile');
        document.getElementById("profile-tab").setAttribute('data-toggle','tab');
    }
    
});





