window.onload = function(){

    let nombre = localStorage.getItem("nombre");

    let avatar = localStorage.getItem("avatar");

    document.getElementById("usuarioNombre").innerText = nombre;

    document.getElementById("usuarioAvatar").src = avatar;

    iniciarDrag();
}

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
}

/* HABLAR */

function hablar(texto){

    speechSynthesis.cancel();

    let voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    voz.rate = 0.9;

    speechSynthesis.speak(voz);
}

/* REVISAR */

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

        hablar("Excelente trabajo. Completaste el nivel 2");

        alert("🎉 ¡Nivel 2 completado!");
    }
    else{

        hablar("Algunas respuestas están incorrectas");
    }
}

/* BOTONES */

function volverNivel1(){

    window.location.href = "juego3d.html";
}

function finalizarJuego(){

    hablar("Felicitaciones. Terminaste el juego de figuras tres D");

    setTimeout(() => {

        window.location.href = "figuras3d.html";

    }, 3000);
}