function obtenerRecordatorio(dia) {
    const actividades = {
        'lunes': { actividad: 'Atender a un cliente específico' },
        'martes': { actividad: 'Visitar una agencia fuera de la ciudad' },
        'miercoles': { actividad: 'Llevar a mi hija al ballet' },
        'jueves': { actividad: 'Priorizar entregas de desarrollo' },
        'viernes': { actividad: 'Atender problemas de manera remota' },
        'sabado': { actividad: 'Hacer lo que mi esposa quiera' },
        'domingo': { actividad: 'No hay actividades programadas' }
    };

    const diaMinuscula = dia.toLowerCase().trim();

    if (!actividades[diaMinuscula]) {
        return null;
    }

    return {
        dia: dia,
        actividad: actividades[diaMinuscula].actividad
    };
}

function mostrarActividad() {
    const diaIngresado = document.getElementById('diaIngresado').value;
    const divError = document.getElementById('error');
    const divResultado = document.getElementById('resultado');

    divError.textContent = '';

    if (!diaIngresado) {
        divError.textContent = 'Por favor ingresa un dia de la semana';
        divResultado.classList.remove('mostrar');
        return;
    }

    const recordatorio = obtenerRecordatorio(diaIngresado);

    if (!recordatorio) {
        divError.textContent = 'Dia ingresado invalido. Por favor ingresa un dia de la semana valido (Lunes, Martes, etc.)';
        divResultado.classList.remove('mostrar');
        return;
    }

    document.getElementById('nombreDia').textContent = recordatorio.dia.toUpperCase();
    document.getElementById('actividad').textContent = recordatorio.actividad;

    divResultado.classList.add('mostrar');
}

