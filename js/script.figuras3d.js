let figuraActual = "cubo";

window.onload = function(){

    let nombre = localStorage.getItem("nombre");

    let avatar = localStorage.getItem("avatar");

    document.getElementById("usuarioNombre").innerText = nombre;

    document.getElementById("usuarioAvatar").src = avatar;
}

/* ========================= */
/* HABLAR */
/* ========================= */

function hablar(texto){

    speechSynthesis.cancel();

    let voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    voz.rate = 0.9;

    voz.pitch = 1.2;

    speechSynthesis.speak(voz);
}

/* ========================= */
/* MOSTRAR FIGURA */
/* ========================= */

function mostrarFigura(figura){

    figuraActual = figura;

    let imagen = document.getElementById("imagenFigura");

    imagen.src = "img/figuras3d/" + figura + ".png";

    hablar(figura);
}

/* ========================= */
/* HABLAR AL TOCAR IMAGEN */
/* ========================= */

function hablarFiguraActual(){

    hablar(figuraActual);
}

/* ========================= */
/* VOLVER */
/* ========================= */

function volverMenu(){

    speechSynthesis.cancel();

    window.location.href = "matematicas.html";
}

/* ========================= */
/* SIGUIENTE */
/* ========================= */

function siguiente(){

    speechSynthesis.cancel();

    window.location.href = "juego3d.html";
}