
// Constantes para credenciales correctas
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "1234";

// Variable para controlar intentos
let intentos = 0;

// Función para manejar el inicio de sesión
function manejarInicioSesion() {
    // Obtener referencias del DOM
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const resultadosDiv = document.getElementById('resultados');
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');

    // Leer valores de los inputs
    const usuario = usuarioInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    // Verificar si los campos están vacíos
    if (!usuario || !contrasena) {
        resultadosDiv.textContent = "Por favor, ingresa tanto el usuario como la contraseña.";
        return;
    }

    // Incrementar intentos
    intentos++;

    // Verificar credenciales
    if (usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA) {
        resultadosDiv.textContent = "¡Bienvenido a Educlic!";
        resultadosDiv.style.backgroundColor = "#d4edda"; // Verde para éxito
        resultadosDiv.style.color = "#155724";
        btnIniciarSesion.disabled = true; // Deshabilitar botón después de éxito
        setTimeout(() => {
    window.location.href = "home.html";
}, 800);
    } else {
        if (intentos >= 3) {
            resultadosDiv.textContent = "Usuario bloqueado. Ha superado el número de intentos.";
            resultadosDiv.style.backgroundColor = "#f8d7da"; // Rojo para error
            resultadosDiv.style.color = "#721c24";
            btnIniciarSesion.disabled = true; // Deshabilitar botón
        } else {
            resultadosDiv.textContent = `Datos incorrectos. Intento ${intentos} de 3.`;
            resultadosDiv.style.backgroundColor = "#fff3cd"; // Amarillo para advertencia
            resultadosDiv.style.color = "#856404";
        }
    }

    // Limpiar campos después de cada intento
    usuarioInput.value = '';
    contrasenaInput.value = '';
}

// Función principal para inicializar la aplicación
function inicializarApp() {
    // Obtener referencia al botón
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');

    // Añadir event listener al botón
    btnIniciarSesion.addEventListener('click', manejarInicioSesion);
}

// Ejecutar la inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', inicializarApp);


