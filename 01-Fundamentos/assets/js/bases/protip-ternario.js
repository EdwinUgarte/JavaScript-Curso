

const elMayor = (a,b) => (a > b) ? {a} : {b};

const membresia = ( miembro) => (miembro) ? '2 dolares ' : '10 dolares'

console.log(elMayor(10,15));
console.log(membresia(false));


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'thor' : 'loki',
    (() => 'Nick Fury')(), //!Esto es una funcion anonima autoinvocada
    elMayor(10,15),
];

console.log(amigosArr);

const nota = 82; // A+ A B F
const grado = (nota >= 95) ? 'A+':
              (nota >= 90) ? 'A':
              (nota >= 80) ? 'B':
              (nota >= 75) ? 'C+':
              (nota >= 70) ? 'C': 'f';

console.log({nota, grado});