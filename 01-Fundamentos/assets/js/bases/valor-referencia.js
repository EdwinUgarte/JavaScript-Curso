let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });

 

                    //! Operador spred para poder asignar difernete valor igualandolo de otro objeto
const cambiaNombre = ({ ...persona }) => { //? [...] separa los objetos igualados, es la mas recomendable  
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });


//? Arreglos

const frutas = ['manzana', 'pera', 'piña'];

//! time() Esta funcion nos ayuda a medir el performance de un bloque de codigo se cierra con timeEnd()
console.time('slice');
const otrasFrutas = frutas.slice(); //? slice() separa los objetos igualados  
console.timeEnd('slice');


console.time('spread');
const otrasFrutas2 = [...frutas]; //? [...] separa los objetos igualados, es la mas recomendable  
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({frutas, otrasFrutas});