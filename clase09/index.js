const primerBoton = document.getElementById('primerBoton')
const segundoBoton = document.getElementById('segundoBoton')
const divMouse = document.getElementById('divMouse')
const inputTexto = document.getElementById('inputTexto')
//console.log(primerBoton)

// escuchar eventos

// 1. addEventListener

primerBoton.addEventListener('click', clickFunction)

// segundoBoton.addEventListener('click',)

function clickFunction() {
  console.log('Hiciste click')
}

// 2. prefijo 'on'

//segundoBoton.onclick = clickFunction
segundoBoton.onclick = () => console.log('HICISTE CLICK BOTON 2')

// EVENTOS DEL MOUSE

//divMouse.onmousemove = () => console.log('MOUSE MOVE ')
// divMouse.onmouseover = () => console.log('MOUSE OVER')
// divMouse.onmouseout = () => console.log('MOUSE OUT')
// divMouse.onmouseup = () => console.log('MOUSE UP')
// divMouse.onmousedown = () => console.log('MOUSE DOWN')

// EVENTOS DEL TECLADO
// inputTexto.onkeydown = (e) =>{
//     console.log(e.key)
// }
// inputTexto.onchange = (e) => {
//     const nombre = e.target.value
//     alert(`Bienvenido ${nombre} a nuestra pagina`)
    
    
    
//     console.log(e.target.value)
// }


// inputTexto.oninput = (e) => {
//   // console.log('evento',e)
//   console.log('data', e.target.value)
// }


