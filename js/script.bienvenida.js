window.onload = function(){

    let nombre = localStorage.getItem("nombre");

    let avatar = localStorage.getItem("avatar");

    // MENSAJE CENTRAL
    document.getElementById("mensaje").innerText =
        "Bienvenido " + nombre + ", ¿Estás listo para aprender?";

    document.getElementById("avatar").src = avatar;

    // USUARIO ARRIBA
    document.getElementById("usuarioNombre").innerText = nombre;

    document.getElementById("usuarioAvatar").src = avatar;
}

/* BOTONES */

function irMatematicas(){

    window.location.href = "matematicas.html";
}

function irLenguaje(){

    alert("Asignatura: Lenguaje");
}

function irIngles(){

    alert("Asignatura: Inglés");
}