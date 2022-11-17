const equipos = [
  { id: 1, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 1, numeroJugadores: 56 },
  { id: 2, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 4, numeroJugadores: 30 },
  { id: 3, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 20 },
  { id: 4, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 84 },
  { id: 5, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 1, numeroJugadores: 77 },
  { id: 6, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 92 },
  { id: 7, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 2, numeroJugadores: 36 },
  { id: 8, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 25 },
  { id: 9, tecnicoDeFutbolId: 4, ciudadDelEquipoId: 4, numeroJugadores: 11 },
  { id: 10, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 1, numeroJugadores: 70 },
  { id: 11, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 1, numeroJugadores: 76 },
  { id: 12, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 34 },
  { id: 13, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 3, numeroJugadores: 16 },
  { id: 14, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 30 },
  { id: 15, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 2, numeroJugadores: 18 },
  { id: 16, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 1, numeroJugadores: 17 },
  { id: 17, tecnicoDeFutbolId: 4, ciudadDelEquipoId: 2, numeroJugadores: 100 },
  { id: 18, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 45 },
  { id: 19, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 1, numeroJugadores: 69 },
  { id: 20, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 1, numeroJugadores: 42 },
  { id: 21, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 3, numeroJugadores: 20 },
  { id: 22, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 2, numeroJugadores: 58 },
  { id: 23, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 2, numeroJugadores: 75 },
]

// operador++

// let numero = 20
// //numero = numero + 1
// numero++

// equipos.forEach((equipo) => equipo.numeroJugadores++)
// console.log(equipos)

// operador ternario

function masDe40(equipo) {
  if (equipo.numeroJugadores >= 40) {
    console.log('Tiene 40 o mas jugadores')
  } else {
    console.log('Tiene menos de 40 jugadores')
  }
}

function masDe40Ternario(equipo) {
  equipo.numeroJugadores >= 40
    ? console.log('Tiene 40 o mas jugadores')
    : console.log('Tiene menos de 40 jugadores')
}
// if else if else
function rango(equipo) {
  if (equipo.numeroJugadores < 40) {
    console.log('Tiene menos de 40 jugadores')
  } else if (equipo.numeroJugadores >= 40 && equipo.numeroJugadores <= 60) {
    console.log('Tiene entre 40 y 60 jugadores')
  } else {
    console.log('Tiene mas de 60 jugadores')
  }
}

function rangoTernario(equipo) {
  equipo.numeroJugadores < 40
    ? console.log('Tiene menos de 40 jugadores')
    : equipo.numeroJugadores >= 40 && equipo.numeroJugadores <= 60
    ? console.log('Tiene entre 40 y 60 jugadores')
    : console.log('Tiene mas de 60 jugadores')
}
// rango(equipos[0])
// rangoTernario(equipos[0])

// operador AND

let numero = 2
if(numero>  4 ){
    console.log('numero Mayor a 4')
}

//numero>4 && console.log('numero Mayor a 4')

// let numero2 = numero > 4 && 10
// console.log(numero2)

// // operador OR
// function resultadoOR(numero){
//     return numero || 0
// }
// console.log(resultadoOR())

// // Acceso condicional a un objeto
// console.log(equipos[50]?.id || 'este equipo no existe')

// const estudiante = {
//     nombre: 'Maxi',
//     apellido: 'Gil',
//     idioma: 'Espanol',
//     curso: 'Javascript',
//     edad: 33,
//     equipoFavorito: 'Brasil'
// }

function frase(obj){
    return `El nombre del estudiante es ${obj.nombre} ${obj.apellido}. El curso
    al que pertenece es ${obj.curso || 'BackEnd'} y tiene ${obj.edad} anos de edad`
}

function fraseDes(obj){
    const {nombre: name,apellido,idioma,curso,edad,estaCasado} = obj
    // const nombre = obj.nombre
    // const apellido = obj.apellido
    // const idioma = obj.idioma
    
return `El nombre del estudiante es ${name} ${apellido}. El curso
al que pertenece es ${curso || 'BackEnd'} y tiene ${edad} anos de edad y esta ${estaCasado}`
}
//console.log(fraseDes(estudiante))

// const animales = ['perro','gato','raton','pajaro','jirafa','elefante']
// function arrayDes(array){
// const [animal1,animal2,animal3,animal4,d,] = array
// // const animal1 = array[0]
// // const animal2 = array[1]
// // const animal3 = array[2]
// // const animal4 = array[3]
// console.log(d)
// }
// arrayDes(animales)

// spread
const animales1 = ['perro','gato','raton','pajaro','jirafa','elefante']
const animales2 = ['guacamaya','loro','serpiente']

//const animales = animales1.concat(animales2)
//const animales = [...animales1,...animales2]
//console.log(animales)

const estudiante1 = {
    nombre: 'Maxi',
    apellido: 'Gil',
    idioma: 'Espanol',
    curso: 'Javascript',
    edad: 33,
    equipoFavorito: 'Brasil'
}

//const estudiante2 = estudiante1
const estudiante2 = {...estudiante1}
estudiante2.equipoFavorito = 'Argentina'
console.log(estudiante2)
console.log(estudiante1)


const animales = [...animales1,'buitre','raton']
console.log(animales)
