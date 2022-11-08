const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const password = document.getElementById('password')
const formulario = document.getElementById('formulario')

formulario.onsubmit = (e) => {
    e.preventDefault()
    //console.log(e.target.children)
    // console.log(nombre.value)
    // alert(`Hola ${nombre.value} ${apellido.value}, bienveniedo`)
//    const childrenArray = Array.from(e.target.children)
//     childrenArray.forEach(child => {
//         console.log(child.value)
//     });
console.log(nombre.value,apellido.value,email.value,password.value)
}