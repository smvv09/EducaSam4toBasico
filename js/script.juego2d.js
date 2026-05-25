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

            // SI YA HAY ALGO
            if(zone.children.length > 0){

                let existente = zone.children[0];

                elementoArrastrado.parentNode.appendChild(existente);
            }

            zone.appendChild(elementoArrastrado);
        });
    });

    // VOLVER OPCIONES
    const opciones = document.getElementById("opciones");

    opciones.addEventListener("dragover", e => {

        e.preventDefault();
    });

    opciones.addEventListener("drop", () => {

        opciones.appendChild(elementoArrastrado);
    });
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

        hablar("Excelente trabajo. Todas las respuestas son correctas");

        alert("🎉 ¡Nivel completado!");
    }
    else{

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

    window.location.href = "juego2d_nivel2.html";
}