import "./styles.css";

import { heroesCiclo, ifAwait, obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";

// //? Llamado de funcion con await
// console.time("await");
// obtenerHeroeAwait("capi2").then((heroe) => {

//     if (heroe) {
//     console.table(heroe);
//   }

//   console.timeEnd("await");
// });
// //! Fin de explicacion await


// heroesCiclo();

ifAwait('spiderman');


// import {promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync} from './js/promesas';

// // promesaLenta.then(mensaje => {
// //     console.log(mensaje);
// // })
// // promesaMedia.then(mensaje => {
// //     console.log(mensaje);
// // })
// // promesaRapida.then(mensaje => {
// //     console.log(mensaje);
// // })

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
// .then(mensaje => { console.log(mensaje) });

// buscarHeroe('capi').then(heroe => { console.log(heroe)});
// buscarHeroeAsync('iron2').then(heroe => { console.log(heroe)});
