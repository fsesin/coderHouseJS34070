// const formulario = document.getElementById('formulario')

// const inputNombre = document.createElement('input')
// inputNombre.setAttribute('type','submit')
// formulario.append(inputNombre)

const productos = []

class Producto {
  constructor(id, name, price, stock) {
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
  }
}

const producto1 = new Producto(1, 'iphone', 600, 20)
productos.push(producto1)
const producto2 = new Producto(2, 'tv', 1600, 20)
productos.push(producto2)
const producto3 = new Producto(3, 'ipad', 400, 20)
productos.push(producto3)
const producto4 = new Producto(4, 'computador', 1800, 20)
productos.push(producto4)
const producto5 = new Producto(5, 'mouse', 100, 20)
productos.push(producto5)

// manipulacion DOM

const selectTag = document.getElementById('lista')

productos.forEach(producto=>{
    const optionTag = document.createElement('option')
    optionTag.innerText = `${producto.name}: $${producto.price}`
    selectTag.append(optionTag)
})

//selectTag.append()
