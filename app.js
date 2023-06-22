// Escribe tu código aquí.

// creamos una constante para almacenar el selector del html que agregamos llamado lista
const listaHTML = document.querySelector(".lista");

function liveCode1(palabraEntrada, arrayPalabrasEmtrada) {
    // Asignamis los parametros de entrada de la función en variables que utilizaremos mas adelante
    let palabra = palabraEntrada;
    let arrayPalabras = arrayPalabrasEmtrada;
    let returnPalabras = [];

    // Iteramos para buscar en el array de entrada
    let contador = 0;
    for (i = 0; i < arrayPalabras.length; i++) {
        // Condicionamos que se agregue al array UNICAMENTE la palabra perteneciente al array que sea mayor a la longitud de la palabra ingresada
        if (arrayPalabras[i].length > palabra.length) {
            // Imprimimos para ver que funcione
            // console.log(arrayPalabras[i]);
            // Creamos un contador que vaya aumentando UNICAMENTE cuando se encuentra una palabra que cumple la condición
            returnPalabras[contador] = arrayPalabras[i];
            contador++;
        }
    }
    // imprimimos el array para verificar que funcione
    console.log(returnPalabras);
    // retornamos el array para utilizar mas adelante
    return returnPalabras
}

// 1. Primera parte de la práctica
// console.log(liveCode1("bocina", ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']));

// 2. Segunda parte de la práctica
function pintarDOM(arrayString) {
    // Iteramos el array para hacer una acción por cada elemento del array
    arrayString.forEach(element => {
        // Por cada elemento creamos un elemento li (elemento indivudual de una lista UL/OL)
        const imprimirDOM = document.createElement('li');
        // Colocamos el texto del array en el elemento li creado
        imprimirDOM.textContent = element;
        // Anexamos el elemento creado en el padre que viene siendo la lista del HTML
        listaHTML.appendChild(imprimirDOM);
    });
}

pintarDOM(liveCode1("bocina", ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']));