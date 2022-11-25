function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

// console.log(sumar(5,4))
// console.log(restar(5,4)) // 10 segundos
// console.log(mult(5,4))

// setTimeOut()
// console.log('primer console.log')
// setTimeout(() => {
//     console.log('segund console.log')
// }, 0);
// console.log('tercer console.log')

// let resultadoSuma
// // resultadoSuma = sumar(5,4) // 9
// // let resultadoResta = restar(resultadoSuma,6) // 3
// // console.log(`El resultado de tu resta es ${resultadoResta}`)

// setTimeout(() => {
//     resultadoSuma = sumar(5,4)
// }, 5000);

// let resultadoResta = restar(resultadoSuma,6)
// console.log(`El resultado de tu resta es ${resultadoResta}`)

function primeraPromesa(palabra) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (palabra === 'hola') {
        resolve(10)
      } else {
        reject('No eres bienvenido')
      }
    }, 0)
  })
}

function segundaPromesa(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(num)) {
        resolve(num * 2)
      } else {
        reject('No pasaron un numero')
      }
    }, 0)
  })
}

primeraPromesa('hola')
  .then(resultado => {
    return segundaPromesa('a')
  })
  .then(res=>console.log(res))
  .catch((error) => console.log(error))
//console.log(saludo)
