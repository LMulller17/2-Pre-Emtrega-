// Función para obtener el nombre del usuario y mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    // Solicita el nombre del usuario
    let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
    
    // Si el usuario proporciona un nombre
    if (nombre) {
        // Muestra el mensaje de bienvenida en la consola o en el DOM
        alert("¡Bienvenido/a a mi portafolio, " + nombre + "!");
    } else {
        // Si el usuario no ingresa un nombre, muestra un mensaje genérico
        alert("¡Bienvenido/a a mi portafolio!");
    }
}

// Llamar a la función cuando la página se carga
window.onload = function() {
    mostrarBienvenida();
};
