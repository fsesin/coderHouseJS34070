// function elevar(n) {
//   return function (m) {
//     return m ** n
//   }
// }

// let cuadrado = elevar(2) // 2 = n
// let cubo = elevar(3) // 3 = n

// console.log(cuadrado(7)) // 7 = m
// console.log(cuadrado(4))
// console.log(cubo(7)) // 7 = m
// console.log(cubo(4))

//

/*
function sumar(n1, n2) {
  return n1 + n2
}

sumar(1,2)
*/

// funciones anonimas
// const sumar = function(n1,n2){
//     return n1+n2
// }

//sumar(1,2)

// funcion flecha

// const sumar = (n1,n2)=>{
//     return n1+n2
// }
// sumar(1,2)

//
// function sumar(n1, n2) {
//   return n1 + n2
// }
let sumar = (n1, n2) => {
  return n1 + n2
}
// function restar(n1, n2) {
//   return n1 - n2
// }
let restar = (n1, n2) => {
  return n1 - n2
}

function operacionMatematica(n1, n2, fn) {
  const resultado = fn(n1, n2)
  return resultado
}

// console.log(
//   operacionMatematica(1, 2, (n1, n2) => {
//     return n1 + n2
//   })
// )

// console.log(
//   operacionMatematica(10, 2, (n1, n2) => {
//     return n1 - n2
//   })
// )

//ejemplo array
const arrayPersonas = [
  {
    nombre: 'Emiliano',
    edad: 42,
    curso: 'JS10',
  },
  {
    nombre: 'Erik',
    edad: 50,
    curso: 'JS10',
  },
  {
    nombre: 'Luis',
    edad: 24,
    curso: 'JS8',
  },

  {
    nombre: 'Maxi',
    edad: 30,
    curso: 'JS8',
  },

  {
    nombre: 'Oscar',
    edad: 18,
    curso: 'JS12',
  },
]

// forEach
const array = [1, 2, 3, 4, 5]
// for (let i=0;i<array.length;i++){
//     console.log(array[i])
// }

//forEach
//array.forEach((num) => console.log(num))

//find
// const personaEncontrada = arrayPersonas.find(
//   (persona) => persona.edad === 30
// )
//console.log(`La persona buscada tiene una edad de ${personaEncontrada.edad}`)

//filter
// const personasFiltradas = arrayPersonas
//   .filter((persona) => persona.edad > 20)
//   .map((persona) => {
//     return { nombre: persona.nombre, edad: persona.edad }
//   })
//   .sort((per1, per2) => per1.nombre.localeCompare(per2.nombre))
// console.log(personasFiltradas)

// map
// const mapArray = personasFiltradas.map(persona=>persona.nombre)
// console.log(mapArray)

const pi = Math.round(4.2)
console.log(pi)

// Date
console.log(new Date())
