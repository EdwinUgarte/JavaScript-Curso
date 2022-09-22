

// Dias de semana abrimos a las 11, 
// pero los fines de semana abrimos a las 9


// Entra a un sitio web, para consultar si esta abierto hoy

const dia = 0;
let horaApertura;
let horaActual = 8
let mensaje;

//? Un ternario, le da el valor de retorno, si es que la (Condicion) se cumple la estructura seria
// * variable = (condicion) ? [si se cumple retorna esto] : [si no, esto];
//! Ternario 1
horaApertura = ( [0,6].includes(dia) ) ? 9 : 10;
/!* Ternario 2*/ //!Nota:  Los backticks `` son mejores para poder concatenar cadenas y variables las varaiables se leen asi ${}
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`;


console.log({horaApertura, horaActual, mensaje});