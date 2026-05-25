let figuraActual = "cubo";

/* ========================= */
/* FIGURAS APRENDIDAS */
/* ========================= */

let aprendidas = [];

let completado = false;

/* ========================= */
/* ONLOAD */
/* ========================= */

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

    voz.pitch = 1.1;

    speechSynthesis.speak(voz);
}

/* ========================= */
/* MOSTRAR FIGURA */
/* ========================= */

function mostrarFigura(figura){

    figuraActual = figura;

    let imagen = document.getElementById("imagenFigura");

    imagen.src = "img/figuras3d/" + figura + ".png";

    hablar(nombreBonito(figura));

    marcarAprendida(figura);
}

/* ========================= */
/* NOMBRES BONITOS */
/* ========================= */

function nombreBonito(figura){

    if(figura === "cubo") return "Cubo";

    if(figura === "esfera") return "Esfera";

    if(figura === "cono") return "Cono";

    if(figura === "cilindro") return "Cilindro";

    if(figura === "piramide") return "Pirámide";

    return figura;
}

/* ========================= */
/* HABLAR FIGURA */
/* ========================= */

function hablarFiguraActual(){

    hablar(nombreBonito(figuraActual));
}

/* ========================= */
/* MARCAR APRENDIDA */
/* ========================= */

function marcarAprendida(figura){

    if(!aprendidas.includes(figura)){

        aprendidas.push(figura);

        let boton = document.getElementById("btn-" + figura);

        boton.style.background = "#2a9d2a";

        boton.style.color = "white";
    }

    verificarCompletado();
}

/* ========================= */
/* COMPLETADO */
/* ========================= */

function verificarCompletado(){

    if(completado){

        return;
    }

    if(aprendidas.length === 5){

        completado = true;

        lanzarConfetti();

        hablar("Felicitaciones. Aprendiste todas las figuras tres D");

        let btn = document.getElementById("btnSiguiente");

        btn.disabled = false;

        btn.style.opacity = "1";

        btn.style.cursor = "pointer";
    }
}

/* ========================= */
/* CONFETTI */
/* ========================= */

function lanzarConfetti(){

    let duration = 3000;

    let end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount: 10,

            spread: 90,

            startVelocity: 40,

            origin: { y: 0.6 }

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);
        }

    })();
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

    if(aprendidas.length < 5){

        hablar("Primero debes aprender todas las figuras");

        return;
    }

    window.location.href = "juego3d.html";
}