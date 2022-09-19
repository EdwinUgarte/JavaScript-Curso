const arr = new Array(10);
console.log(arr);

const arr2 = [];
console.log(arr2);

const videojuegos = ["Mario", "Megaman", "Luigui"];
console.log({ videojuegos });

console.log(videojuegos[0]);

// Puede haber todo tipo de datos dentro de los arreglos

const arregloCosas = [
  true,
  123,
  "Edwin",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", [
    "Dr Willy",
    "Woodman"
    ]]
];

// console.log({arregloCosas})
// console.log(arregloCosas[7][4]);
console.log(arregloCosas[7][4][1]);
