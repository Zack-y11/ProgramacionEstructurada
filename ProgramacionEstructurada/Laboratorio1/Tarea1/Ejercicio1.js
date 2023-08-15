//Crear un programa que permita calcular el área y perímetro de un paralelogramo. Debe usar prompt.
let base = parseInt(prompt("Ingrese la base del paralelogramo"));
let altura = parseInt(prompt("Ingrese la altura del palalegramo"))
let lado = parseInt(prompt("Ingrese el tamaño del lado del paralelogramo"))


let area = base * altura;
let perimetro = 2 * (base + lado)
console.log(`El area del paralelogramo es ${area} cuadrados`)
console.log(`El perimetro del paralalegromamo es ${perimetro}`)

