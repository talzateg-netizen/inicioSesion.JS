function crearTarjetaCurso(curso) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "curso-card";

    tarjeta.innerHTML = `
        <h3>${curso.titulo}</h3>
        <p class="introduccion">${curso.introduccion}</p>
        <p class="profesor"><strong>Profesor:</strong> ${curso.profesor}</p>
        <p class="resena">${curso.resena}</p>
        <a class="ver-curso" href="curso.html?id=${curso.id}">Ver curso</a>
    `;

    return tarjeta;
}

function cargarCursos() {
    const contenedores = {
        desarrollo: document.getElementById("lista-desarrollo"),
        diseno: document.getElementById("lista-diseno")
    };

    cursos.forEach(curso => {
        const tarjeta = crearTarjetaCurso(curso);
        contenedores[curso.modulo].appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", cargarCursos);