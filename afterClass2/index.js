// Variable

// let primeraVariable = 10
// let segundaVariable = 'hola'

// //var - let - const

// {
//   var variableVar = 5
//   let variableLet = 10
//   const variableConst = 15

//   variableLet = 11
//   //variableConst = 16
// }
//console.log(variableVar)
//console.log(variableLet)
//console.log(variableConst)

//const nombre = prompt('Ingresa tu nombre')
// const sumar = function(n1,n2){
//     return n1+n2
// }

// Condicionales

// if ('si manana no llueve') {
//   // bloque de codigo a ejecutar si se cumple la condicion
//   // vamos a la playa
// }

//
// if(nombre.toLowerCase() === 'matias' ){
//     alert('Hola Matias')
// } else {
//     alert('Tu no eres bienvenido')
// }
// == vs ===
//const numero = parseInt('5')
// if (numero === 5) {
//   console.log(true)
// }

// condicional anidado

// if (numero < 10) {
//   alert('numero menor a 10')
// } else if (numero >= 10 && numero < 20) {
//   alert('numero entre 10 y 20')
// } else if (numero >= 20 && numero < 50) {
//   alert('numero entre 20 y 50')
// } else {
//   alert('el numero esta dentro de un rango equivocado')
// }

// ciclos

//conteo
// contador=contador+1 => contador++
// for(let i = 1;i>=0;i=i+1){
// // bloque de codigo a ejecutar en cada vuelta / iteracion
// console.log('Hola Matias')
// }

//condicional
let nombre = prompt('Ingresa tu nombre')
while (nombre !== 'juan') {
  // bloque de codigo a ejecutar en cada vuelta / iteracion
  alert('Tu no eres bienvenido')
  nombre = prompt('Ingresa tu nombre')
}
