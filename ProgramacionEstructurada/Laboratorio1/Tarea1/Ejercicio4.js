//Crear una función que acepte un string como parámetro y convierta la primera letra en mayúscula. Ejemplos.

function strMayus (cadena) {
    let words = cadena.split(' ')
    for(let i = 0; i < words.length; i++){
        words [i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

let firstMayus = prompt("Ingrese palabras para convertir la primera en mayuscula");
let convercion = strMayus(firstMayus);
console.log(convercion)