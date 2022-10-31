let numero = parseInt(prompt('Ingresa un numero'));
const numerosArray = [];
let i = 10;
while (i <= 15) {
  numerosArray.push(numero);
  numero = parseInt(prompt('Ingresa un numero'));
  i++;
}
console.log(numerosArray)

let numeroDeseado = parseInt(prompt('Ingresa el numero que quieras buscar'));
const index = numerosArray.indexOf(numeroDeseado);
if(index!== -1){
    alert(`El numero ingresado se encuentra en la posicion ${index}`)
    alert('El numero ingresado se encuentra en la posicion'+ index)
} else {
    alert('El numero ingresado no existe en la lista')
}