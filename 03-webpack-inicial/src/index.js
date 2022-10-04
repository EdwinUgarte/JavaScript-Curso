import { saludar } from './js/componentes'
import './styles.css';

import { Heroes } from './js/heroes';


const nombre = 'Edwin'
saludar(nombre);


// Ejemplo practico

let heroes = [];
const peter = new Heroes('spider-man', 'Parker', 'Marvel', 'Rojo');
const bruce = new Heroes('batman', 'Wayne', 'DC', 'Nengro');
const clark = new Heroes('super-man', 'kent', 'DC', 'Azul/Rojo');
heroes.push(peter, bruce, clark);

const visualHeroes = (heroe) => {
   const divHeroes = document.querySelector('#divHeroes');
   const nombreHeroe = document.createElement('li');
   const apellidoHeroe = document.createElement('li');
   const equipoHeroe = document.createElement('li');
   const trajeHeroe = document.createElement('li');
   const br = document.createElement('br');

   nombreHeroe.innerText = `Heroe: ${heroe.nombre.toUpperCase()}`
   apellidoHeroe.innerText = `Apellido: ${heroe.apellido.toUpperCase()}`
   equipoHeroe.innerText = `Equipo: ${heroe.team.toUpperCase()}`
   trajeHeroe.innerText = `Traje: ${heroe.traje.toUpperCase()}`
   divHeroes.append(nombreHeroe, apellidoHeroe, equipoHeroe, trajeHeroe);
   divHeroes.append(br);
}

const listarHeroes = (()  => {

    for(let i = 0; i<heroes.length; i++){
        visualHeroes(heroes[i]);
    }

})();


