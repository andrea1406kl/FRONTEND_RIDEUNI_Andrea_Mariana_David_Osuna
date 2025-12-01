document.getElementById("form-registro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (!nombre || !email || !pass) {
        alert("Completa todos los campos");
        return;
    }

    const usuario = { nombre, email };

    guardarUsuario(usuario);

    window.location.href = "index.html";
});
