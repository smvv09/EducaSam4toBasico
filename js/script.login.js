let avatarSeleccionado = "";

// Seleccionar avatar
function seleccionarAvatar(img) {

    let avatares = document.querySelectorAll(".avatars img");

    avatares.forEach(a => a.classList.remove("selected"));

    img.classList.add("selected");

    avatarSeleccionado = img.src;

    let audioAvatar = document.getElementById("audioAvatar");

    audioAvatar.currentTime = 0;
    audioAvatar.play();
}

// Ingresar
function ingresar() {

    let nombre = document.getElementById("nombre").value.trim();

    let audioError = document.getElementById("audioError");
    let audioBien = document.getElementById("audioBien");

    if (nombre === "" || avatarSeleccionado === "") {

        audioError.currentTime = 0;
        audioError.play();

        let mensaje = nombre === "" 
            ? "Debes escribir tu nombre"
            : "Debes seleccionar un avatar";

        let voz = new SpeechSynthesisUtterance(mensaje);
        voz.lang = "es-ES";
        speechSynthesis.speak(voz);

        return;
    }

    // guardar datos
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("avatar", avatarSeleccionado);

    audioBien.currentTime = 0;
    audioBien.play();

    let voz = new SpeechSynthesisUtterance("Bienvenido " + nombre);
    voz.lang = "es-ES";
    speechSynthesis.speak(voz);

    // 🎉 CONFETI
    lanzarConfetti();

    setTimeout(() => {
        window.location.href = "bienvenida.html";
    }, 2000);
}

// 🎉 CONFETTI (LIBRERÍA CANVAS-CONFETTI)
function lanzarConfetti() {

    let duration = 2 * 1000;
    let end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            spread: 90,
            startVelocity: 40,
            origin: { y: 0.6 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();
}