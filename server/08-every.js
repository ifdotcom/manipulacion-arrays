//# El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).
const numbers = [1, 30, 39, 29, 10, 13];

const result = numbers.every(item => item <= 40)

console.log(result);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const resultTwo = team.every(el => el.age < 15)
console.log(resultTwo);