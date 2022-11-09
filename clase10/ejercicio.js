const titulo = document.getElementById('titulo')
const formulario = document.getElementById('formPrincipal')
const nombreInput = document.getElementById('nombre')
const apellidoInput = document.getElementById('apellido')


const infoUsuario = {}
formulario.onsubmit = (event) => {
    event.preventDefault()
    //console.log(e.target.children)
    // const nombre = e.target.children[0]
    // const apellido = e.target.children[1]
    infoUsuario['nombreUsuario'] = nombreInput.value
    infoUsuario['apellidoUsuario'] = apellidoInput.value
   console.log(infoUsuario)
   const infoUsuarioJSON = JSON.stringify(infoUsuario)
   localStorage.setItem('usuario',infoUsuarioJSON)
}
