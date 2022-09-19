
//*Declaracion de una funcion

//!Funcion simple, no se recomienda declarar asi para evitar sobreescrituras con 'var'
function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
}

//? Funcion anonima, es mas recomendable declarar asi
// const saludar2 = function( nombre){
//     console.log('Hola ' + nombre);
// }


//? Declaración de funcion flecha, son la mejor opcion, se declara como una constante 
const saludarFlecha = (nombre) => {
    console.log("Hola " + nombre +  " Flecha");
}


//* Llamado de funciones y asignacion de argumentos

saludar("Edwin" , 40, "edad"); //!Aqui Podemos asignar argumentos que no han sido declarados porque las funciones tradicionales nos lo permiten, esto no se puede hacer en funciones flecha

saludar("Juan");
saludar("Javier");

saludarFlecha("Edwin");