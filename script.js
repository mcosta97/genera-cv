let experiencias = [{id: 0, titulo: '', empresa: '', desde: '', hasta: '', tareas: []}]
let lastIndex = 0;

function agregarExperiencia() {
    $("ul").append(`<li id='experiencia_${lastIndex}' class='list-group-item ${(lastIndex == 0) ? 'active': ''}'>(Nueva) <span class='badge'><i class='fas fa-trash'></i></span></li>`)
    experiencias.push({id: lastIndex, titulo: '', empresa: '', desde: '', hasta: '', tareas: []})
    lastIndex++
}

$(document).ready(function() {
    agregarExperiencia()
    $(".badge").on('click', function(e) {
        let componenteId = e.target.parentNode.parentNode.id
        let id = componenteId.split("_")[1]
        experiencias.splice(id, 1)
        $("#"+componenteId).remove()
    });
})