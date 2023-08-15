const prompt = require("prompt-sync")({ sigint: true });
// ##################################################################
// Casseli Layza
// Clase; 07 - Bucles y repeticiones
// Fecha: 14-08-2023
// ##################################################################

// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.`
function losDiesNuerosSiguientesDelValorIngresado(ingresaValor) {
  for (let i = ingresaValor + 1; i <= ingresaValor + 10; i++) {
    console.log(i);
  }
  return `fin`;
}

let ingresaValor = parseInt(prompt("Ingrese un Numero: "));

console.log(losDiesNuerosSiguientesDelValorIngresado(ingresaValor));

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
for (let i = 5; i <= 20; i += 3) {
  console.log(i);
}

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

function sumatoria(n) {
  let suma = 0;
  for (let i = 0; i <= n; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumatoria(100));

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

function factorialDeN(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialDeN(6));

// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

function mostrarSecuenciaFibonacci(valorIngresado) {
  let fibonacci = [0, 1];
  for (let i = 2; i < valorIngresado; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
console.log(mostrarSecuenciaFibonacci(20));
