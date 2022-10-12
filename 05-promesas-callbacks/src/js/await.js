import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId = ['capi', 'iron', 'spiderman'];
const heroesPromesas = heroesId.map(heroeId => buscarHeroe(heroeId));


export const obtenerHeroesArr = async() => {

    return await Promise.all(heroesId.map(id => buscarHeroe(id)));

    // const heroesArr = [];
    // for(let id of heroesId){
    //  heroesArr.push(buscarHeroe(id));
    // }
    // return await Promise.all(heroesArr);
}


export const obtenerHeroeAwait = async (id) => {
try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
    
} catch (error) {
    console.log('Catch');
    console.warn(error);
}

}


export const heroesCiclo = async () => {
    console.time('HeroesCiclo');


//* Se puede ejecutar un ciclo 'for await' para esperar la ejecución de las promesas
     for await(const heroe of heroesPromesas){
        console.log(heroe);
     }

    console.timeEnd('HeroesCiclo');
}

export const ifAwait = async(id) => {

    if( (await buscarHeroeAsync(id)).nombre === 'Peter'){
        console.log('Genial spiderman es el mejor de todos');
    }else{
        console.log('Naaaa creeeoooo');
    }
}

//? Los 'await' son palabras reservadas la cual nos ayuda a hacer una espera de la ejecucion de una promesa
//? y detiene la ejecucion de la funcion hasta que se resuelve la promesa,
//? nos ayuda a tener mas consistencia de datos y lograr una ejecucion correcta
//! PARA USAR await SE NECESITA QUE LA FUNCION SEA async