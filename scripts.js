const datos = {
    nombre: '',
    email: '',
    celular: '',
    mensaje: ''
}

const formulario = document.querySelector('.form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const celular = document.querySelector('#celular');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);



formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const { nombre, email, celular, mensaje} = datos;


    if(nombre === '' || email === '' || celular === '' || mensaje === '') {
        mostrarError('Todos los compos son obligatorios');

        return;
    }



    console.log('Todo bien...');


    mostrarMensaje('Mensaje enviado correctamente');

});

//Validar formulario





function leerTexto(e) {
    datos[e.target.id] = e.target.value;

}





//Mostrar error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );



    setTimeout(() => {
    error.remove();
    }, 3000);
}



function mostrarMensaje(mensaje) {
    const valido = document.createElement('P');
    valido.textContent = mensaje;
    valido.classList.add('valido');

    formulario.appendChild( valido );



    setTimeout(() => {
    valido.remove();
    }, 3000);




    setTimeout(() => {
        window.location.replace("index.html");
        }, 4000);
}


