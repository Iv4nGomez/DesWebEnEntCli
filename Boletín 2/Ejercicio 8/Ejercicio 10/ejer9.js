// Realiza un programa que nos pregunte nuestro nombre y a
//  continuación pregunta nuestra fecha de nacimiento. 
//  El programa da como resultado nuestro nombre y a continuación los días
//  que hemos vivido hasta el momento (deberás modificar el realizado para 
// calcular distancia entre fechas).

const salida = document.getElementById("salida");

function milisegundos_dhm(milisegundos) {
    let dias = Math.floor(milisegundos / (1000 * 60 * 60 * 24));


    return `Has vivido ${dias} días`;
}

function fechas() {
    const fechaNacUsuario = new Date(document.getElementById("fecha_nacimiento").value);
    const ahora = new Date()


    const diff = Math.abs(fechaNacUsuario.getTime() - ahora.getTime());
    salida.innerHTML = milisegundos_dhm(diff);
}
