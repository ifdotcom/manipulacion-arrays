const totals = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum = sum + element;
}

console.log(sum);

//# a reduce se le envian dos parametros: arrow function y el estado inicial
const result = totals.reduce((sum, element)=> sum + element, 10)

console.log(result)