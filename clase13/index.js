//Swal.fire('Any fool can use a computer')

const inputNombre = document.getElementById('nombre')
const botonSweet = document.getElementById('sweetAlert')
const botonToastify = document.getElementById('toastify')
// botonSweet.onclick = () => alert(`Bienvenido a JS`)
// botonSweet.onclick = () => {
//     Swal.fire(`Bienvenido ${inputNombre.value}`)
// }

botonSweet.onclick = () => {
    const ahora = DateTime.now().setLocale('es').toLocaleString(DateTime.DATETIME_HUGE)
//console.log(ahora)
  Swal.fire({
    title: 'BIENVENIDO',
    text: `${ahora}`,
    icon: 'success',
    confirmButtonText: 'Ingresar',
    //timer: 3000,
    position: 'top-start',
    showCancelButton: true,
    cancelButtonText: 'Seguro?',
  })
}

botonToastify.onclick = () => {
  Toastify({
    text: `Hola ${inputNombre.value}`,
    duration: 3000,
    position: "center",
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
  }).showToast()
}

const {DateTime} = luxon
//const DateTime = luxon.DateTime

const ahora = DateTime.now()
console.log(ahora.toLocaleString(DateTime.DATETIME_HUGE))
