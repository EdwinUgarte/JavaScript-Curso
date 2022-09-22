// * ++++++++++++++++++++++++++ WHILE - DO WHILE +++++++++++++++++++++++++++++++++++

const carros = ["ford", "mazda", "seat", "toyota"];
let i = 0;

console.warn('While')
//? Mientras que la condicion sea true se seguira ejecutando
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}



console.warn('Do - While')
let j = 0;

//? Se ejecuta el do, siempre al menos una vez aunque la condicion no se cumpla
do{
 console.log(carros[j]);
 j++;
}while( carros[j]);











































