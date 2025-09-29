console.assert("Legolas" > "Gimli");

console.clear();

console.dir(window);

console.dirxml(document.body);

const marvel = ['Spiderman', 'Ironman', 'Thor', 'Capitan America', 'Lobezno'];

console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

/**A. Dado un array de números enteros positivos desordenados, 
  devolver otro array con los números ordenados.
**/
function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenar(marvel)); //*Probe con el array de la platilla y los ordena de forma alfabeticamente
console.log(ordenar([14, 23, 99, 874, 93, 12, 20]));

/**B. Crear una función que reciba un número entero positivo y 
     devuelva true si dicho número es par o false en caso contrario. 
**/
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7));

/**C. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y 
    alturaDeseada como números enteros positivos y devuelva el número de días 
    que tardará la planta en medir la alturaDeseada. 
**/
function calcularDiasCrecimiento(velocidadCrecimeinto, velocidadDeCrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimeinto;
        dias++;
        if (altura >= alturaDeseada) {
            return dias;
        }
        altura -= velocidadDeCrecimiento;
    }
    return dias;
}

//*Para probar la funcion se puede hacer de dos formas:
//1. Dando los valores directamente con un log en el archivo js 
console.log(calcularDiasCrecimiento(10, 5, 20));
//2. Dando los valores en el apartado de consola al inspeccionar el archivo html, de esta forma:
//calcularDiasCrecimiento(3, 1, 10)
