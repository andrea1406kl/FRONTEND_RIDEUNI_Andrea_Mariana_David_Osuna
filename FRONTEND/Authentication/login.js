document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    // Aquí en el futuro conectas tu backend
    if (email === "" || pass === "") {
        alert("Completa todos los campos");
        return;
    }

    const usuario = {
        nombre: email.split("@")[0],
        email: email
    };

    guardarUsuario(usuario);

    window.location.href = "index.html";
});
