let tiempo = new Date(0);
let intervalo;
let corriendo = false;


function mostrarTiempo() {
    let minutos = String(tiempo.getUTCMinutes())+0
    let segundos = String(tiempo.getUTCSeconds())+0
    let milisegundos = String(tiempo.getUTCMilliseconds() / 10);
    document.getElementById("tiempo").textContent = `${minutos}:${segundos}:${milisegundos}`;
}

document.getElementById("pausar").onclick = function() {
    if (!corriendo) {
        corriendo = true;
        intervalo = setInterval(() => {
            tiempo.setMilliseconds(tiempo.getMilliseconds() + 10);
            mostrarTiempo();
        }, 10); 
    } else {
        corriendo = false;
        clearInterval(intervalo);
    }
};

document.getElementById("resetear").onclick = function() {
    tiempo = new Date(0);
    mostrarTiempo();
};
mostrarTiempo();
