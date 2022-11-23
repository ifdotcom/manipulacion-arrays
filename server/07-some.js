//# somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

//# arrays:
const numbers = [1, 2, 3, 4];

let result = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

  if (element % 2 === 0) {
    result = true;

    break;
  }
}

console.log(result);

const resultTwo = numbers.some((el) => el % 2 === 0);
console.log(resultTwo);

//#objetos:

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
  {
    customerName: "Valeria",
    total: 100,
    delivered: false,
  },
];

const resultThree = orders.some((item) => item.delivered);

console.log(resultThree);

// # libreria:
var areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
    title: "Cena",
  },
];


const newAppontment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 30),
};
// const over = areIntervalsOverlapping(
//   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
//   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
// );

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

console.log(isOverlap(newAppontment));