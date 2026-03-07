
function InicioSesion() {

    const usuarioCorrecto = "educlic@gmail.com";
    const passwordCorrecto = "Tania";

    let Usuario;
    let contrasena;
    let intentos = 3;
    

    while (intentos > 0) {
        Usuario = prompt('Introduce tu usuario:');
        contrasena = prompt('Introduce tu contraseña:');
        

        if (Usuario == usuarioCorrecto && contrasena == passwordCorrecto) {
            console.log("Bienvenido al sistema");
            break;

        } else if (--intentos > 0) {
            
            console.log(`datos incorrecto Te quedan ${intentos} intentos`);

        } else  {
            intentos = 0;
            console.log("Usuario Bloqueado, ha superado el número de intentos");
        }
    }
}
InicioSesion();


