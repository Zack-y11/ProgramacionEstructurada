//Crear un programa que permita determinar si un número ingresado por el usuario es múltiplo de 13 y 20 simultaneamente.
let numeroEvaluado = parseInt(
  prompt("Ingrese el numero y averigue si es multiplo de 13 o 20")
);

if (numeroEvaluado > 1) {
  if (numeroEvaluado % 13 === 0 && numeroEvaluado % 20 === 0) {
    console.log("El numero evaluado es un multiplo de 13 o 20");
  } else if (numeroEvaluado % 13 === 0 || numeroEvaluado % 20 == !0) {
    console.log("El numero es solo multiplo de 13");
  } else if (numeroEvaluado % 13 == !0 || numeroEvaluado % 20 === 0) {
    console.log("El numero es solo multiplo de 20");
  } else {
    console.log("El numero evaluado no es un multiplo de 13 o 20");
  }
}else{
    console.log("El numero evaluado debe ser mayor a uno")
}
