//# Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).
//# En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1. 

const number = [1,30,49,29,10,13]

const result = number.find(el => el === 100)

console.log(result);