function mostarAlert() {
   let dni = prompt("Introduce los numeros de un DNI: ");

    

   if (dni == -1) {
     alert("Haz finalizado la introduccion de DNI, aqui las letras correspondientes de los DNI que me has pasado:")
   }
}

setInterval(mostarAlert, 20000)