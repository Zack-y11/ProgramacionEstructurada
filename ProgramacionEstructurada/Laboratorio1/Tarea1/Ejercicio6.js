//Escriba una función de JavaScript para calcular el valor de bn donde n es el exponente y b es la base. Acepte b y n del usuario y muestre los resultados. Nota: Para este ejercicio no puede usar Math.pow, debe usar un bucle puede ser for. Ejemplo.
function calcularPotencia (base, exponente) {
    let resultado = 1
    for(let i = 0; i < exponente; i++){
        resultado *= base
    }
    return resultado
}

let base = parseInt(prompt("Ingrese la base"))
let exponente = parseInt(prompt("Ingrese el exponente"))

let potencia = calcularPotencia(base, exponente)
console.log(`El resultado de ${base} con exponente ${exponente} es igual a ${potencia}`)
