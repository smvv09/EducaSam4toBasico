window.onload = function(){

    let nombre = localStorage.getItem("nombre");

    let avatar = localStorage.getItem("avatar");

    document.getElementById("usuarioNombre").innerText = nombre;

    document.getElementById("usuarioAvatar").src = avatar;
}

function irFiguras2D(){

    window.location.href = "figuras2d.html";
}

function irFiguras3D(){

    window.location.href = "figuras3d.html";
}

function volverInicio(){

    window.location.href = "bienvenida.html";
}