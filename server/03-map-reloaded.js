const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
// solo retorna valores especificos
const resultOne = orders.map((el) => el.total);
console.log("resultOne", resultOne);

// console.log("original", orders);
// // agrega una nueva propiedad, pero el original se modifica
// const resultTwo = orders.map(el=> {el.tax = .19; return el});
// console.log("resultTwo", resultTwo)
// console.log("original", orders);

console.log("original", orders);
// para que no se modifique es necesario utiliza spreed operator
const resultThree = orders.map((el) => {
  return { ...el, tax: 19 };
});
console.log("resultThree", resultThree);
console.log("original", orders);
