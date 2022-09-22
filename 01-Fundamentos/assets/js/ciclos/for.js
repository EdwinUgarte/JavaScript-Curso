//? ++++++++++++++++++++ Ciclo For +++++++++++++++++

const heroes = ["batman", "superman", "mujer-maravilla", "aquaman"];

console.warn("For tradicional");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For in");
//? For in nos da los indices de la iteracion
for (let i in heroes) {
  console.log(i);
}

//? For in nos da los valores de la iteracion
console.warn("For of");
for (let i of heroes) {
  console.log(i);
}

//* for ejercicio

const tabla = (numero) => {
  console.warn("Ejercicio tabla de multipicar");
  for (let i = 1; i <= 10; i++) {
    let mult = i * numero;
    console.log(mult);
  }
};

// tabla(5);

console.error("Ejercicio");
let apple = ["iphone", "ipad", "mac", "mackbook", "airpods"];

for (let i = apple.length - 1; i >= 0; i--) {
  console.log(apple[i]);
}

const numeros5 = () => {
  for (let i = 0; i <= 1000; i = i + 5) {
    console.log(i);
  }
};

// numeros5();

console.warn("Ternario");
let resultado = 0;
for (let i = 1; resultado <= 2000; i++) {
  resultado = i * 7;

//   resultado < 1000 ? console.log({ i }, resultado) : console.log("Se paso 1000");
  if(resultado <= 14){
    console.log({ i }, resultado)
  }

}
