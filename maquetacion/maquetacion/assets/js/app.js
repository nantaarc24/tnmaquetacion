document.addEventListener('DOMContentLoaded', function () {
    //alert('Documento cargado');
    menuMobile();
})

function menuMobile() {
    const menu = document.querySelector('.menu-mobile');
    menu.addEventListener('click', function () {
        //alert('click en el menu mobile');
        const navegacion = document.querySelector('.navegacion');
        console.log(navegacion);
        /*if (navegacion.classList.contains('mostrar')) {
            navegacion.classList.remove('mostrar');
            //console.log('tiene la clase mostrar');
        } else {
            //console.log('no tiene la clase mostrar');
            navegacion.classList.add('mostrar');
        }*/
        navegacion.classList.toggle('mostrar');
    });
}

function configBotonEnviar() {
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', function (e) {
        alert('mensaje del boton');
    });

}