//se podria hacer así, o poniendo en el form html: onsubmit=validar()

document.getElementById("loginForm").addEventListener("submit", function(event) {
    //evitamos que se envie el formulario
    event.preventDefault();

    //buscamos campos
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();

    //buscamos nodos para mostrar errores
    let errorUsuario = document.getElementById("errorUsuario");
    let errorPassword = document.getElementById("errorPassword");

    //limpiamos mensajes de error anteriores
    errorUsuario.textContent = "";
    errorPassword.textContent = "";

    //inicializamos valido a true
    let valido = true;

    if (usuario === "") {
        errorUsuario.textContent = "El campo usuario es obligatorio.";
        //para cualquier error ponemos valido a false
        valido = false;
    }

    if (password === "") {
        errorPassword.textContent = "El campo contraseña es obligatorio.";
        valido = false;
    }

    //si valido es true, enviamos el formulario
    if (valido) {
        alert("Formulario válido. Enviando...");
        this.submit(); 
    }
});