window.onload = function(){

    let nombre = localStorage.getItem("nombre");

    let avatar = localStorage.getItem("avatar");

    document.getElementById("usuarioNombre").innerText = nombre;

    document.getElementById("usuarioAvatar").src = avatar;

    iniciarDrag();
}

/* ========================= */
/* DRAG REAL */
/* ========================= */

let elementoArrastrado = null;

let nivelCompletado = false;

function iniciarDrag(){

    const drags = document.querySelectorAll(".drag");

    const zones = document.querySelectorAll(".dropzone");

    drags.forEach(item => {

        item.addEventListener("dragstart", () => {

            elementoArrastrado = item;
        });
    });

    zones.forEach(zone => {

        zone.addEventListener("dragover", e => {

            e.preventDefault();
        });

        zone.addEventListener("drop", () => {

            if(zone.children.length > 0){

                let existente = zone.children[0];

                elementoArrastrado.parentNode.appendChild(existente);
            }

            zone.appendChild(elementoArrastrado);
        });
    });

    const opciones = document.getElementById("opciones");

    opciones.addEventListener("dragover", e => {

        e.preventDefault();
    });

    opciones.addEventListener("drop", () => {

        opciones.appendChild(elementoArrastrado);
    });

    // BOTON SIGUIENTE DESACTIVADO
    let btn = document.querySelector(".btn-siguiente");

    btn.disabled = true;

    btn.style.opacity = "0.5";

    btn.style.cursor = "not-allowed";
}

/* ========================= */
/* HABLAR */
/* ========================= */

function hablar(texto){

    speechSynthesis.cancel();

    let voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    voz.rate = 0.9;

    speechSynthesis.speak(voz);
}

/* ========================= */
/* REVISAR */
/* ========================= */

function revisarJuego(){

    let zones = document.querySelectorAll(".dropzone");

    let correctas = 0;

    zones.forEach(zone => {

        let respuesta = zone.innerText.trim();

        let correcta = zone.dataset.correcto;

        if(respuesta === correcta){

            zone.style.background = "#7bd389";

            correctas++;

        }else{

            zone.style.background = "#f28482";
        }
    });

    if(correctas === zones.length){

        nivelCompletado = true;

        hablar("Excelente trabajo. Todas las respuestas son correctas");

        alert("🎉 ¡Nivel completado!");

        let btn = document.querySelector(".btn-siguiente");

        btn.disabled = false;

        btn.style.opacity = "1";

        btn.style.cursor = "pointer";

    }else{

        hablar("Algunas respuestas están incorrectas. Intenta nuevamente");
    }
}

/* ========================= */
/* BOTONES */
/* ========================= */

function volverMenu(){

    window.location.href = "figuras2d.html";
}

function siguienteNivel(){

    if(!nivelCompletado){

        hablar("Primero debes completar correctamente el nivel");

        return;
    }

    window.location.href = "juego2d_nivel2.html";
}