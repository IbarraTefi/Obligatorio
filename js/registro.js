
  function nombreUsuario(){
    var nom = document.getElementById("inputUsuario").value;
    localStorage.setItem("Nombre" , nom);
  }

  document.getElementById("nombreUsuario").innerHTML = localStorage.getItem("Nombre");

  function cerrarSesion(){
    localStorage.clear();
  }

  function onSignIn(googleUser)
  {
    var profile=googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }