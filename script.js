document.addEventListener('DOMContentLoaded', function () {

    // Seleccion de los elementos de la interfaz
    const emailActua = document.querySelector('#mailactualizaciones');
    const emailContacto = document.querySelector('#mailcontacto');
    const formActu = document.querySelector('.actualizaciones');
    const formContacto = document.querySelector('.contacto');

    //Eventos
    formActu.addEventListener('submit', enviarActualizacion);
    formContacto.addEventListener('submit', enviarContacto);

    function enviarActualizacion(e) {
        e.preventDefault();
        if (emailActua.value === ""){
            alertas("Ingrese un Mail",formActu);
        } else {
            alertas("Gracias por Suscribirte",formActu);
            emailActua.value = "";
        }
    }
    function enviarContacto(e) {
        e.preventDefault();
        if (emailContacto.value === ""){
            alertas("Ingrese un Mail",formContacto);
        } else {
            alertas("Gracias! Un representante se contactará pronto",formContacto);
            emailContacto.value = "";
        }
    }

    function alertas(mensaje,form){
        const alerta = document.createElement('P');
        alerta.classList.add('text-white', 'text-center');
        alerta.textContent = mensaje;
        form.appendChild(alerta);
        setTimeout(() => {
            alerta.remove(); 
        }, 3000);
    }
})