// iphone - 600
// ipad - 400
// tv - 1000
// computador - 1200
const productosArray = []
class Producto {
  constructor(nombre, precio, stock,id) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.id = id
  }
}

const iphone = new Producto('Iphone', 600, 20,1)
productosArray.push(iphone)
const ipad = new Producto('Ipad', 400, 15,2)
productosArray.push(ipad)
const tv = new Producto('TV', 1000, 25,3)
productosArray.push(tv)
const computador = new Producto('Computador', 1200, 40,4)
productosArray.push(computador)

console.log(productosArray)

const productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieras comprar? 1.iphone - 2.ipad - 3.tv - 4.computador'
  )
)
const carrito = []
let seguirComprando = true

while(seguirComprando===true){
if(productoSeleccionado)
}
