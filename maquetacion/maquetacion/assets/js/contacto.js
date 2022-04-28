document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    configBotonEnviar();
}

function configBotonEnviar() {
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', function (e) {
        alert('mensaje del boton');
    });
    
}