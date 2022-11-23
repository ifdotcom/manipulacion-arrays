//# Filter regresa un array con los elementos encontrados

const words = ["spray", "elite", "limit", "apple", "exuberant"];
const newArray = [];

//# For
for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("original", words);
console.log("newArray", newArray);

//#Filter 

const result = words.filter(el=> el.length>=6)
console.log("original", words);
console.log("result", result);

// #---------------------------------------------------------
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


const resultTwo = orders.filter(el => el.delivered && el.total >= 100)

console.log(resultTwo);


// const name = "Valentina";
// const search = orders.filter(el=> el.customerName === name)

const search = (name)=>{
return orders.filter(el => el.customerName.includes(name))
}
console.log(search("dfd"));