//*Declaracion de una funcion

//!Funcion simple, no se recomienda declarar asi para evitar sobreescrituras con 'var'
function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
}

//? Funcion anonima, es mas recomendable declarar asi
// const saludar2 = function( nombre){
//     console.log('Hola ' + nombre);
// }

//? Declaración de funcion flecha, son la mejor opcion, se declara como una constante
const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre + " Flecha");
};

//* Llamado de funciones y asignacion de argumentos

saludar("Edwin", 40, "edad"); //!Aqui Podemos asignar argumentos que no han sido declarados porque las funciones tradicionales nos lo permiten, esto no se puede hacer en funciones flecha

saludar("Juan");
saludar("Javier");

saludarFlecha("Edwin");

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2));

const sumar2 = (a, b) => a + b;
console.log(sumar2(1, 2));

//! Funcion normal
function getAleatorio() {
  return Math.random();
}
console.log(getAleatorio());

//!Funcion flecha
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());

//! Funcion normal

function saludar(nombre) {
  return "Hola soy " + nombre;
}
console.log(saludar("Javier"));

//!Funcion flecha

const saludar2 = (nombre) => "Hola soy " + nombre;
console.log(saludar2("Juan"));
