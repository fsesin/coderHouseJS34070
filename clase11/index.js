// buscar elementos en el dom

const inputNombre = document.getElementById('nombre') 
const inputApellido = document.getElementById('apellido')
const botonDatos = document.getElementById('botonDatos')



// creando un event listener

botonDatos.onclick = () => {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    }
    inputNombre.value = ''
    inputApellido.value = ''
    console.log(usuario)

    // guardar en storage
    localStorage.setItem('infoUsuario',JSON.stringify(usuario))

    // JSON
    // JSON.stringify - JSON.parse
}