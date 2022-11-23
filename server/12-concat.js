//# El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.
//# Este método recibe uno o varios argumentos:
//# Valores cualesquiera y/o arrays para concatenar.

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

const arr3 = arr1.concat(arr2);
console.log(arr3);

//#otra forma:

const arr4 = [...arr1, ...arr2];
console.log(arr4)

//# ... -> separa la palabra  
const arr5 = [...arr1, ..."random"];
console.log(arr5)


arr1.push(...arr2)

console.log(arr1);