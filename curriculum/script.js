const PUNTAJE_MAXIMO = 5

let nombre = "Matias Dylan Costa"
let titulo = "Analista Programador SSr."
let resumen = "Soy una persona innovadora y creativa que le gusta trabajar con nuevas tecnologias. Cuento con 5 años de experiencia trabajando con aplicaciones de escritorio, y 3 años con aplicaciones Web / Mobile. Trabaje en modalidad freelance para clientes amigos y recomendados. Estoy en capacitacion constante"
let contacto = {mail: 'costamatias97@gmail.com', telefono: '+54 11-3524-0591', calle: 'Luis Maria Campos', altura: '4490', localidad: 'Caseros'}

let experiencias = [
    {
        titulo: 'Analista Programador - Freelance',
        empresa: null,
        desde: '01/2014',
        hasta: '08/2018',
        tareas: [
            "Sistema de delivery personalizada (Java y MySQL). Gestion de clientes, proveedores, productos, repartidores.",
            "Software simple para control de stock, generación de remitos y pedidos."
        ]
    },
    {
        titulo: 'Analista Programador - Soluciones de Punta de Caja',
        empresa: 'IncluIT (Red Link S.A.)',
        desde: '08/2017',
        hasta: '01/2019',
        tareas: [
            "Mantenimiento de SAM2000 en VB6, SQL Server y Access. Tambien di soporte a la Mesa de Ayuda SAM",
            "Soporte a ambientes de desarrollo para RedMob Desktop, ATM Biometrico, Anses Buimetrico en .NET y Oracle",
            "Desarrollo por incidentes, bugs, y solicitudes del sector Comercial",
            "Migracion de datos y lógica a un nuevo sistema de Recaudacion desarrollado en Java, PostgreSQL y Oracle"
        ]
    },
    {
        titulo: 'Analista Programador - Gestion de Entidades y Online',
        empresa: 'IncluIT (Red Link S.A.)',
        desde: '01/2019',
        hasta: '09/2019',
        tareas: [
            "Desarrollo y resolucion de bugs en los Proyectos Pagar y SGE con Java, JSF, PrimeFaces, Spring, Hibernate, Oracle, PostgreSQL, Tomcat y WebLogic",
            "Desarrollo y mantenimiento de herramientas automatizadas para facilitar tareas, tanto Web como de Escritorio"
        ]
    },
    {
        titulo: 'Analista Programador - Tesis ExpertaART',
        empresa: 'Instituto ORT',
        desde: '04/2019',
        hasta: '12/2019',
        tareas: [
            "Desarrollador en equipo Scrum formado para la Tesis de ORT entregamos una solucion de Asistente de Evacuacion para la empresa ExpertaART utilizando IBM Watson, Java, MySQL y Ionic"
        ]
    },
    {
        titulo: 'Analista Programador - Gestion de Entidades y Online',
        empresa: 'Red Link S.A.',
        desde: '09/2019',
        hasta: null,
        tareas: [
            "Desarrollo en la célula Scrum ‘Pagar Presencial’ usando ALM Octane como herramienta de planificacion y seguimiento de bugs.",
            "Migracion de servidores SUSE Linux a Oracle Linux por obsolescencia tecnologica.",
            "Actualizacion de version de WebLogic y migracion de las aplicaciones desplegadas."
        ]
    }
]

let puntuaciones = [
    {
        seccion: 'Habilidades',
        elementos: [
            {nombre: 'Java', puntaje: 5},
            {nombre: '.NET', puntaje: 4},
            {nombre: 'SQL', puntaje: 3},
            {nombre: 'JavaScript', puntaje: 3},
            {nombre: 'HTML/CSS', puntaje: 3},
            {nombre: 'Windows', puntaje: 4},
            {nombre: 'Linux', puntaje: 4},
        ]
    },
    {
        seccion: 'Frameworks',
        elementos: [
            {nombre: 'Spring Boot', puntaje: 4},
            {nombre: 'Hibernate', puntaje: 3},
            {nombre: 'Bootstrap', puntaje: 4},
            {nombre: 'Angular', puntaje: 4},
            {nombre: 'React Native', puntaje: 3}
        ]
    },
    {
        seccion: 'Idiomas',
        elementos: [
            {nombre: 'Español', puntaje: 5},
            {nombre: 'Ingles', puntaje: 3}
        ]
    }
]

let educacion = [
    {
        titulo: 'Perito Mercantil - Bachiller Comercial',
        establecimiento: 'Antonio Devoto',
        desde: '2010',
        hasta: '2015'
    },
    {
        titulo: 'Técnico Superior en Analisis de Sistemas',
        establecimiento: 'Instituto ORT',
        desde: '2016',
        hasta: '2020'
    },
    {
        titulo: 'Implementador ERP',
        establecimiento: 'Instituto ORT + CESSI',
        desde: '2017',
        hasta: '2017'
    }
]

$(document).ready(function() {
    cargarDatosCabecera()
    completarExperiencias()
    completarPuntuaciones()
})



/* Carga los datos de la cabecera */
function cargarDatosCabecera() {
    $(".nombre").text(nombre)
    $(".titulo").text(titulo)
    $("#resumen").text(resumen)
    $("#email").text(contacto.mail)
    $("#telefono").text(contacto.telefono)
    $("#direccion").text(`${contacto.calle} ${contacto.altura}, ${contacto.localidad}`)
}


/* Dibuja las experiencias */
function completarExperiencias() {
    let experienciasHtml = "";
    let index = 1;
    experiencias.forEach(experiencia => {
        experienciasHtml += `
        <div id="experiencia_${index}">
        <div id="experiencia_${index}_header" class="experiencia-header">
            <p>${experiencia.titulo}</p>
            <p>${getTiempo(experiencia.desde, experiencia.hasta)}</p>
        </div>
        <ul id="experiencia_${index}_contenido">
            ${getTareas(experiencia.tareas)}
        </ul>
        </div>`
    })
    $("#experiencias").html(experienciasHtml)
}

/* Dibuja el tiempo desde y hasta segun distintas condiciones */
function getTiempo(desde, hasta) {
    if (desde != null && hasta != null) {
        return `[${desde} - ${hasta}]`
    } else if (desde != null && hasta == null) {
        return `[${desde} - Actualidad]`
    } else if (desde == hasta) {
        return `[${desde}]`
    }
}
/* Dibuja las tareas que estan cargadas en las experiencias */
function getTareas(tareas) {
    let tareasHtml = "";
    tareas.forEach(tarea => {
        tareasHtml += `<li>${tarea}</li>`
    })
    return tareasHtml
}



/* Dibuja las secciones con las habilidades y puntuaciones que contiene */
function completarPuntuaciones() {
    let puntuacionesHtml = "";
    puntuaciones.forEach(puntuacion => {
        puntuacionesHtml += `<div>
            <h4>${puntuacion.seccion}</h4>
            ${dibujarElementos(puntuacion.elementos)}
        </div>`
    })
    $("#puntuaciones").html(puntuacionesHtml);
}

/* Dibuja los elementos que contienen puntajes */
function dibujarElementos(elementos) {
    let elementosHtml = ""
    elementos.forEach(elemento => {
        elementosHtml += `<div class="d-flex"><h4>${elemento.nombre}</h4>
        <div style="margin:5px 0px 0px 10px">${getPuntaje(elemento.puntaje)}</div></div>`
    })
    return elementosHtml;
}

/* Dibuja los puntajes segun la puntuacion que se le asigno al mismo */
function getPuntaje(puntaje) {
    let puntajeHtml = "";
    for(let i = 0; i < PUNTAJE_MAXIMO; i++) {
        puntajeHtml += (i >= puntaje) ? `<i class="far fa-square"></i>` : `<i class="fas fa-square"></i>`
    }
    return puntajeHtml;
}