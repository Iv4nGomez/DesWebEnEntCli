//Ejercicios interesantes 12, 26, 38, 39, 47

/*
EJERCICIO 12
*/
// Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, 
// en caso contrario informar el producto y la división del primero respecto al segundo.

// numero1 = parseInt((prompt("Introduce el numero1: ")));
// numero2 = parseInt(prompt("Introduce el numero2: "));

// console.log(typeof(numero1));
// console.log(typeof(numero2));

// if (numero1 > numero2) {
//     document.getElementById("salida").innerHTML = "La <b>suma</b> de estos numeros es: " + (numero1 + numero2);
//     // alert("La suma de estos numeros es: " + (numero1 + numero2));
//     // alert("La diferiencia de estos numeros es: " + (numero1 - numero2));
//     document.getElementById("salida2").innerHTML = "La <b>resta</b> de estos numeros es: " + (numero1 - numero2);
    
// } else {
//     document.getElementById("salida").innerHTML = "El <b>producto</b> de estos numeros es: " + (numero1 * numero2);
//     // alert("El producto de estos numeros es: " + (numero1 * numero2));
//     // alert("La división de estos numeros es: " + (numero1 / numero2));
//     document.getElementById("salida2").innerHTML = "La <b>división</b> de estos numeros es: " + (numero1 / numero2);
// }

/*
EJERCICIO 26
*/

// Desarrollar un programa que permita la carga de 5 valores por teclado utilizando una única variable para dichos valores y 
// nos muestre posteriormente la suma.

// numeros = [];
// sumaTotal = 0;

// for (i= 1; i<=5; i++) {
//     console.log("funciona");
//     numeros[i] = parseInt(prompt("Introduce el numero " + i + ":"));
//     sumaTotal += numeros[i];
// }

// document.getElementById("salida").innerHTML = "La suma total de los 5 numeros es: " + sumaTotal;

/*EJERCICIO 38
*/
// Realizar un programa que al introducir un número por teclado nos diga si es primo o no.

numUsuario = parseInt(prompt("Introduce un numero: "));

//Un numero primo es si el resto da 0 cuando se divide por 0 y por si mismo

esPrimo = false;

for(i=1; i<=numUsuario; i++) {
    console.log("Indice: "+ i)
    if (numUsuario % i == 0 && numUsuario>1) {
       
        esPrimo = true;               /* INTENTAR OPTIMIZAR LO DEL RETURN*/
    } else {
        esPrimo = false;
    }

    console.log(numUsuario % i)

}

esPrimo ? alert("Es primo") : alert("NO es primo")





