//Escriba una función de JavaScript que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena.


function stringLargest (cadena){
    let strLargo = '';
    let palabras = cadena.split(' ')
    for(let i = 0; i < palabras.length; i++ ){

        if (palabras[i].length > strLargo.length){
            strLargo = palabras[i]
        }
    
    }
    return strLargo;
}

let Evaluacion = prompt("Ingresa algunas palabras y el programa detectara la cadena mas grande");
let respuesta = stringLargest(Evaluacion)
console.log(`La palabra mas grande de la oracion es: "${respuesta}"`)


