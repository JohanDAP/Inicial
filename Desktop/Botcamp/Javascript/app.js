
// Comentario de una linea

/**
 * Comentario multilinea
 */
/**

console.log("Hola Mundo");

// Variables

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;


const pi = 3.14156;

let estado = true;

let numero3=78;

let direccion = "CALLE 11 # 40-69";


numero3 = 125;


console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion);


suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;


console.log(suma)


// Concatenar valores

console.log('EL PRIMER VALOR ES: ' + numero1);
console.log('EL SEGUNDO VALOR ES: ' + numero2);
console.log('LA SUMA DE ' + numero1 + ' Y ' + numero2 +' ES: ' + suma);
console.log('LA SUMA DE ' , numero1 , ' Y ' , numero2 ,' ES: ' , suma);

Literal Template

console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);


/**
let edad =18;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

*/


/** 
let calificacion;

calificacion = parseFloat(prompt("Ingrese calificación"));

if (calificacion < 3.0) {
    console.log("Reprobó");
} else if (calificacion >3.1 || calificacion <=4.0) {
    console.log("El estudiante aprobo");
} else {
    console.log("es muy bueno");
}

*/

/** 
let generacion;

generacion = parseInt(prompt("Ingrese año de nacimiento entre 1883 y 2025"))

if (generacion >1883 && generacion <1900) {
    console.log("Generacion perdida")
} else if (generacion >=1901 && generacion <=1924) {
    console.log("Generacion grandiosa")
} else if (generacion >=1925 && generacion <=1945) {
    console.log("Generacion silenciosa")
} else if (generacion >=1946 && generacion <=1964) {
    console.log("Generacion Baby boomers")
} else if (generacion >=1965 && generacion <=1980) {
    console.log("Generacion X")
} else if (generacion >=1981 && generacion <=1996) {
    console.log("Generacion Y")
} else if (generacion >=1997 && generacion <=2012) {
    console.log("Generacion Z")
} else if (generacion >=2013 && generacion <=2025) {
    console.log("Generacion grandiosa")
}
else {
    console.log ("Ingrese año de nacimiento entre 1883 y 2025")
}



/** 

const Aleatorio = Math.floor(Math.random() * 50) + 1;
let Intentos = 0;
let Estado = false;

while (!Estado) {
  
    let userGuess = parseInt(prompt("Adivina un número entre 1 y 50:"));
    Intentos++;

 
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        alert("Por favor, introduce un número válido entre 1 y 50.");
        continue;
    }

   switch (true) {
        
        case (userGuess < Aleatorio):
            alert("Demasiado bajo. Intenta de nuevo.");
            break;
        case (userGuess > Aleatorio):
            alert("Demasiado alto. Intenta de nuevo.");
            break;
            case (userGuess === Aleatorio):
            alert(`¡Felicidades! Adivinaste el número ${Aleatorio} en ${Intentos} intentos.`);
            Estado = true; 
            break;
    }
}

*/

/** 
// Solicitar al usuario el número de estudiantes
let numeroEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));

// Crear un vector (array) vacío para almacenar las calificaciones
let calificaciones = [];

// Permitir al usuario ingresar las calificaciones de cada estudiante
for (let i = 0; i < numeroEstudiantes; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación del estudiante ${i + 1}:`));
    
    // Validar que la calificación esté entre 0 y 10, por ejemplo
    while (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        calificacion = parseFloat(prompt(`Calificación inválida. Ingrese un valor entre 0 y 10 para el estudiante ${i + 1}:`));
    }

    // Agregar la calificación al array
    calificaciones.push(calificacion);
}

// Mostrar las calificaciones ingresadas
console.log("Calificaciones de los estudiantes:");
for (let i = 0; i < calificaciones.length; i++) {
    console.log(`Estudiante ${i + 1}: ${calificaciones[i]}`);
}

*/

/** 

let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let calificaciones = new Array(tamanio);
let sumaCalificaciones = 0;  // Variable para acumular la suma de las calificaciones

for (let i = 0; i < calificaciones.length; i++) {
    calificaciones[i] = parseFloat(prompt("Ingrese las notas"));

    // Acumular la suma de las calificaciones
    sumaCalificaciones += calificaciones[i];
}

for (let i = 0; i < calificaciones.length; i++) {
    console.log(`Calificación ${i + 1} :  ${calificaciones[i]}`);
}

// Calcular y mostrar el promedio
let promedio = sumaCalificaciones / tamanio;
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
*/


function imprimaProducto(prod, prec, cant, tot_art) {
    console.log(`Producto: ${prod}, Cantidad: ${cant}, Precio: ${prec}, Total de artículos: ${tot_art}`);
}

function caja() {
    let total = 0;
    let productos = [];

    while (true) {
        let producto = prompt("Ingrese el nombre del producto");
        let precio = parseFloat(prompt("Ingrese el precio del producto"));
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto"));

        if (!isNaN(precio) && precio >= 0 && !isNaN(cantidad) && cantidad > 0) {
            let subtotal = precio * cantidad;
            total += subtotal;
            productos.push({ nombre: producto, precio: precio, cantidad: cantidad });
            imprimaProducto(producto, precio, cantidad, productos.length);
        } else {
            console.log("Precio o cantidad inválidos, intente de nuevo");
        }

        let continuar = prompt("¿Desea seguir agregando más artículos? (si/no)").toLowerCase();
        if (continuar !== 'si') {
            break;
        }
    }

    console.log("Productos facturados:");
    productos.forEach(prod => {
        console.log(`Producto: ${prod.nombre}, Precio: $${prod.precio}, Cantidad: ${prod.cantidad}`);
    });

    console.log(`Total de la compra: $${total}`);
}

caja();





