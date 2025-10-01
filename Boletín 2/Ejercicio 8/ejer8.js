// Crear un script que muestre mediante un mensaje la fecha actual 
// (día, mes en letra y año), la hora actual (hora y minutos),
//  el día de la semana (en letra) o los tres anteriores a la vez, según elija el usuario.

function cambiar() {
let opcion = document.forms["formulario"].seleccion.value;
const salida =  document.getElementById("salida")

 const fecha = new Date();
 const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
switch (opcion) {
    case "fecha actual":
        
       salida.innerHTML = fecha.toLocaleDateString();
        break;
    case "hora actual":
        salida.innerHTML = fecha.getHours() + ":" +  fecha.getMinutes()
        break
    case "dia de la semana": 
        salida.innerHTML = dias[fecha.getDay()-1]
        break
    case "todo a la vez":
        salida.innerHTML = fecha.toLocaleDateString() + "<br/>"+ 
        fecha.getHours() + ":" +  fecha.getMinutes() + "<br/>" + dias[fecha.getDay()-1]
        break
    default:
        salida.innerHTML = "";
}
}