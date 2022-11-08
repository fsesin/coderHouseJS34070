//console.log(document.body)

// getElement
// 1. getElementById
const parrafo = document.getElementById('parrafo1')
//console.log(parrafo)
// 2. getElementsByClassName
const elementsByClass = document.getElementsByClassName('titulo1')
//console.log(elementsByClass)
// 3. getElementsByTagName
const elementsByTag = document.getElementsByTagName('h1')
//console.log(elementsByTag)
const div = document.getElementById('innerHtml')

//querySelector
// 1. querySelector
// const parrafoQuery = document.querySelector('#parrafo1')
// const elementsByClassQuery = document.querySelector('.titulo1')
// const elementsByTagQuery = document.querySelector('p')
// //console.log(elementsByTagQuery)
// //2. querySelectorAll
// const elementsByTagQueryAll = document.querySelectorAll('h1')
// console.log(elementsByTagQueryAll)

// innerText
const parrafoAnt = parrafo.textContent
console.log(parrafoAnt)
parrafo.innerText = `${parrafoAnt} ESTO ES DESDE JS`

// innerHtml
div.innerHTML = "<h1>DESDE JS CON INNERHTML</h1><h2>H2 DESDE JS</h2>"

// eliminar nodos

parrafo.remove()

// agregar

//1. createElement
const titulo2 = document.createElement('h2')
titulo2.innerText = 'TITULO CREADO DESDE JS'
// 2. append
div.append(titulo2)