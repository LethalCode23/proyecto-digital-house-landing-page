const submitFunction = (event) => {
    
    event.preventDefault()

    if (!validarFormulario()) {
        console.log(validarFormulario())
    } else {
        alert("Datos enviado con exito")
    }
}

document.getElementById('formRegis').addEventListener('submit', submitFunction) // escucha el envio del formulario

function validarFormulario() {

    // se selecciona la coleccion que se obtenga del parametro pasado
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacion = true

    camposTexto.forEach(campo => {

        // error + id con la primera en mayuscula
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))

        if (campo.value.length == '') {
            MostrarError(errorCampo, '¡Este campo es requerido!')
            validacion = false
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            MostrarError(errorCampo, 'Este campo debe tener minimo 3 caracteres!')
            validacion = false
        } else {
            OcultarError(errorCampo)
        }
    })

    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // valida si el formato del correo es valido
        OcultarError(errorEmail)
    } else {
        MostrarError(errorEmail, 'Ingrese un correo electronico valido')
        validacion = false
    }

    // validar edad
    const edad = document.getElementById('age')
    const errorEdad = document.getElementById('errorAge')

    if (edad.value < 18) {
        MostrarError(errorEdad, '!Debes ser mayor a 18 para registrarte!')
        validacion = false
    } else {
        OcultarError(errorEdad)
    }

    // validacion actividad

    const actividad = document.getElementById('activity')
    const errorActividad = document.getElementById('errorActivity')

    if (actividad.value == '') {
        MostrarError(errorActividad, '!Por favor seleccione la actividad!')
        validacion = false
    } else {
        OcultarError(errorActividad)
    }

    const nivelEstudio = document.getElementById('levelStudy')
    const errorNivelEstudio = document.getElementById('errorLevelStudy')

    if (nivelEstudio.value == '') {
        MostrarError(errorNivelEstudio, '!Por favor seleccione un nivel de estudio!')
        validacion = false
    } else {
        OcultarError(errorNivelEstudio)
    }

    // validar los terminos y condiciones

    const aceptoTerminos = document.getElementById('agreeTerms')
    const errorAceptoTerminos = document.getElementById('errorAgreeTerms')

    if (!aceptoTerminos.checked) {
        MostrarError(errorAceptoTerminos, '!Debes aceptar los terminos y condiciones!')
        validacion = false
    } else {
        OcultarError(errorAceptoTerminos)
    }

    return validacion // retornara si el form es valido o no
}

// nos muestra un msg de error
const MostrarError = (e, msg) => {
    e.textContent = msg
    e.style.display = 'block'
}

// limpia el msg de error despues de volver a validar el form
const OcultarError = (e) => {
    e.textContent = ''
    e.style.display = 'none'
}