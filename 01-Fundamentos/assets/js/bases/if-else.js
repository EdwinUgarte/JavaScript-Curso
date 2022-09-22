let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor que 10");
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("El dia es lunes");

  //    if(dia === 1){
  //     console.log('Es Lunes');
  //    }
  //    else{
  //     console.log('No es lunes ni es domingo');
  //    }
} else {
  console.log("No es lunes, ni domingo....");
}



//! Hacer comparacion con objeto sin usar if,else,switch

const dias = {
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
  0: "domingo",
};
const dias2 = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
];

console.log(dias[dia]);
