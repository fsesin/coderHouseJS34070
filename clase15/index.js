// localhost:8080/1?minPrecio=1000&maxPrecio=2000
//method: get
//"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
// fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
//   .then((response) => response.json())
//   .then((resultado) => console.log(resultado.results))
//   .catch((error) => console.log(error))

const boton = document.getElementById('todos')
const lista = document.getElementById('lista')

// boton.onclick = () => {
//   fetch('https://rickandmortyapi.com/api/character')
//     .then((response) => response.json())
//     .then((response) => {
//       const personajes = response.results
//       personajes.forEach((personaje) => {
//         const li = document.createElement('li')
//         li.innerHTML = `
//         <h3>${personaje.name}</h3>
//         <img src=${personaje.image}>
//         <p>${personaje.species} ${personaje.status}</p>
//         `
//         lista.append(li)
//       })
//       // console.log(personajes)
//     })
//     .catch((error) => console.log(error))
// }

boton.onclick = async () => {
    try {
        const llamadoApi = await fetch('https://rickandmortyapi.com/api/character')
        const response = await llamadoApi.json()
        const personajes = response.results
        personajes.forEach((personaje) => {
          const li = document.createElement('li')
          li.innerHTML = `
                <h3>${personaje.name}</h3>
                <img src=${personaje.image}>
                <p>${personaje.species} ${personaje.status}</p>
                `
          lista.append(li)
        })
    } catch (error) {
        console.log(error)
    }
  // console.log(personajes)
}
