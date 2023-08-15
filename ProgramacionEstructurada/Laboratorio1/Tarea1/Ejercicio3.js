//Crear un programa que permita determinar cuantas veces se repite la letra o en un string ingresado por el usuario
let palabrasEvaluada = prompt("Ingrese una palabra y averigua cuanta O hay en la palabra")
let contador = 0

for (let i = 0; i < palabrasEvaluada.length; i++ ) {
    if (palabrasEvaluada[i] === 'o'){
        contador ++
    }     
}
console.log(`Hay ${contador} letras 'o' en ${palabrasEvaluada}`)