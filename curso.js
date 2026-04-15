function mostrarDetalleCurso() {
    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get("id");
    const curso = cursos.find(item => item.id === cursoId);

    const titulo = document.getElementById("titulo-curso");
    const descripcion = document.getElementById("descripcion-curso");
    const profesor = document.getElementById("profesor-curso");
    const resena = document.getElementById("resena-curso");

    if (!curso) {
        titulo.textContent = "Curso no encontrado";
        descripcion.textContent = "No se encontró el curso solicitado.";
        profesor.textContent = "";
        resena.textContent = "";
        return;
    }

    titulo.textContent = curso.titulo;
    descripcion.textContent = curso.introduccion;
    profesor.textContent = `Profesor: ${curso.profesor}`;
    resena.textContent = curso.resena;
}

document.addEventListener("DOMContentLoaded", mostrarDetalleCurso);