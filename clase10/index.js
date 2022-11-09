// storage = {
//     localStorage:
//     sessionStorage
// }

// guardar informacion en storage

localStorage.setItem('apellido','Hernandez')
localStorage.setItem('edad',35)
//sessionStorage.setItem('nombre','Fernando')

// recuperar informacion del storage


const apellidoUsuario = localStorage.getItem('apellido')
const nombreUsuario = sessionStorage.getItem('nombre')

//console.log(apellidoUsuario)
//console.log(edadUsuario)


localStorage.setItem('edad',40)


// borrar toda la informacion de storage

//localStorage.clear()

// borrar algo en particular

//localStorage.removeItem('apellido')

const edadUsuario = localStorage.getItem('edad')
if(edadUsuario===40){
    console.log('aqui')
    alert('Edad correcta')
}

// .length 

const cantidadElementos = localStorage.length
//console.log(cantidadElementos)

// .key
//console.log(localStorage.key(0))
//console.log(localStorage.key(1))


for (let i=0;i<localStorage.length;i++){
const keyName = localStorage.key(i)
const keyValue =localStorage.getItem(keyName)
//console.log(keyName,keyValue)
}

const obj = [{
    name : 'Javier',
    apellido: 'Vigario',
    edad: 25,
    esCasado: true
}]

localStorage.setItem('informacionUsuario',obj)
console.log(localStorage.getItem('informacionUsuario'))

//JSON

const objJSON = JSON.stringify(obj)
localStorage.setItem('infoJSON',objJSON)
const infoStorageJSON = JSON.parse(localStorage.getItem('infoJSON'))
console.log(infoStorageJSON)