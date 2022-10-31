//const numero1 = 5;

let primerArray = [true,5,'hola',5,false,'hi'];
//                  0   1   2    3   4     5
//console.log(primerArray);

// 
//console.log(primerArray[2]);

//console.log(primerArray.length);

// for(let j=0;j<primerArray.length;j++){
// console.log(primerArray[j]);
// }

// agregar elementos a un arreglo

// 1.push
    primerArray.push('elemento agregado al final');
    primerArray.push(10);
// 2. unshift
primerArray.unshift('elemento agregado al inicio')

//console.log(primerArray);

// eliminar elementos de un arreglo

// 1.pop
primerArray.pop();

// 2.shift 
primerArray.shift();
//console.log(primerArray);

const segundoArreglo = [1,3,56,7,8];
primerArray.push(segundoArreglo);
//console.log(primerArray);

// ejemplo
const animales1 = ['gato','perro','serpiente','caballo','raton'];
//animales.splice(1,0,'conejo')

//
const animalesString = animales1.join(', ');
console.log(animalesString);

const animales2 = ['vaca','cerdo','loro','elefante'];

const animales = animales1.concat(animales2);
console.log(animales);

const animalesSal = animales.slice(2,5)
console.log(animalesSal)

const index = animales.indexOf('pajaro')
console.log(index)

const siExiste = animales.includes('Perro')
if(siExiste){
    // bloque de codigo
}



console.log(animales.includes('Perro'))
