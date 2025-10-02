// Crear un script que reciba dos fechas y diga cuál es anterior y 
// el tiempo transcurrido entre ellas (en años, meses y días).


const salida = document.getElementById("salida");

function milisegundos_dhm(milisegundos) {
    let dias = Math.floor(milisegundos / (1000 * 60 * 60 * 24));

    let anios = Math.floor(dias / 365);
    dias %= 365;

    let meses = Math.floor(dias / 30);   //Con 365/12 se calcula el mes 

    return `${anios} años, ${meses} meses, ${dias} días`;
}

function fechas() {
    const f1 = new Date(document.getElementById("fecha_1").value);
    const f2 = new Date(document.getElementById("fecha_2").value);

    const diff = Math.abs(f2.getTime() - f1.getTime());
    salida.innerHTML = milisegundos_dhm(diff);
}
