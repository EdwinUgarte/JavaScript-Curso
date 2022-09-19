// ***************** Arreglos *********************

let juegos = ["Zelda", "Mario", "Metroid", "Halo"];
console.log("Largo: ", juegos.length);

//? Otorga el juego en la primer posicion
let primero = juegos[0];

//? Otorga el juego de la ultima posicion
let ultimo = juegos[juegos.length - 1];

//*Imprime
console.log({ primero, ultimo });

//?Recorre el arreglo y devuelve el indice y el valor
juegos.forEach((nombreJuego, indice) => {
  console.log("Juego: "+ indice + '\nNombre: ' + nombreJuego + '\n');
});

//? Agrega un nuevo juego al final del arreglo
let nuevaLongitud = juegos.push("GOW");
console.log({nuevaLongitud, juegos});


//? Agrega un nuevo juego al principio del arreglo
nuevaLongitud =  juegos.unshift('TLOU11');
console.log({nuevaLongitud, juegos});


//? Borra el ultimo juego del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})


//? Borra juegos y podemos colocar rangos : devuelve un arreglo con los juegos borrados
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos});


//? Encuentra el index de algun juego
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);


