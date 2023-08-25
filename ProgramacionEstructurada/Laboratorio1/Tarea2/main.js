/*Ejercicios a Desarrollar El usuario debe ingresar valores en forma de factorial, ejemplo "2!", "3!", "5!", crear una función que reciba el array ingresado por el usuario como parámetro, y calcular la sumatoria.*/
const factoriales = []

const datosIngresados = parseInt(prompt("cuantos datos desea ingresar en el array"))
let sumArray = 0
//validacion para el factorial 
function tieneExclamacion(string) {
    return string.indexOf('!') > -1;
}

if (isNaN(datosIngresados) || datosIngresados <= 0) {
    alert("Aqui debes poner un numero que sea mayor a 0")
} else {
    for (let i = 0; i < datosIngresados; i++) {
        let fact = prompt(`Ingrese el numero factorial ${1 + i}`) //Validando factorial
        if (fact.length === 2 || tieneExclamacion(fact)) {
            factoriales.push(fact)
        } else {
            alert("Debes Ingresar un numero factorial")
        }
    }
}
//Funcion para obtener el factorial de un numero y sus respectivas validaciones
function factorial(num) {
    if (num === 1 || num === 0) {
        return 1
    } else if (num < 0) {
        alert("el factorial no está definido para números negativos.")
    } else {
        return num * factorial(num - 1)
    }
}
//Funcion que toma un Array y obtiene la suma 
function calcularSumArray(array) {
    const noSignos = factoriales.map(n => n.slice(0, -1));
    const toNumber = noSignos.map(n => Number(n));

    toNumber.forEach(value => {
        if (value >= 0){ 
           sumArray = sumArray + factorial(value) 
        }else{
            alert(`El digito ${value} no es valido`)
        }        
    })

    if (sumArray > 0) {
        console.log(sumArray)
    } else {
        console.log("No hay numeros para sumar")
    }
}
calcularSumArray(factoriales)



