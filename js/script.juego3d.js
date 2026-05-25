let drags = document.querySelectorAll(".drag");

let dropzone = document.querySelector(".dropzone");

/* DRAG */

drags.forEach(drag => {

    drag.addEventListener("dragstart", function(e){

        e.dataTransfer.setData("figura", drag.dataset.figura);
    });
});

/* DROP */

dropzone.addEventListener("dragover", function(e){

    e.preventDefault();
});

dropzone.addEventListener("drop", function(e){

    e.preventDefault();

    let figura = e.dataTransfer.getData("figura");

    dropzone.innerText = figura;

    dropzone.dataset.respuesta = figura;
});

/* VOZ */

function hablar(texto){

    speechSynthesis.cancel();

    let voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

/* REVISAR */

function revisarJuego(){

    if(dropzone.dataset.respuesta === "esfera"){

        dropzone.style.background = "#2a9d2a";

        hablar("Muy bien. La pelota tiene forma de esfera");

        alert("🎉 Correcto");

    }else{

        dropzone.style.background = "#d62828";

        hablar("Esa no es la figura correcta. Intenta nuevamente");
    }
}

/* VOLVER */

function volverMenu(){

    window.location.href = "figuras3d.html";
}