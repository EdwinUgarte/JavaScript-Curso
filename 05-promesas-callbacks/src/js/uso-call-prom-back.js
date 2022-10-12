import "./styles.css";

import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";

console.log("Hola mundo");

const heroeId = "capi";
const heroeId2 = "iron";

// buscarHeroe(heroeId, (err, heroe1) => {
//   if (err) { return console.log(err); }

//   buscarHeroe(heroeId2, (err, heroe2) => {
//     if (err) { return console.log(err); };
//
//   });
// });

//?Se manda llamar la funcion y se coloca .then() -> esto significa que salio todo bien y queremos hacer algo mas

// buscarHeroe(heroeId).then((heroe) => {
//   console.log(`Enviando a ${heroe.nombre} a la mision`);

//   buscarHeroe(heroeId2).then((heroe2) => {
//     console.log(`Enviando a ${heroe.nombre} y a ${heroe2.nombre} a la misión`);
//   });
// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
       .then(([heroe1, heroe2]) => {

        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);

}).catch(err => {
    alert(err);
}).finally(() => {
    console.log('Se termino el promisse');
})

console.log("Fin del programa");
