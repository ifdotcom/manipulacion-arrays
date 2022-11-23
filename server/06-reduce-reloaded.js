const items = [5, 6, 7, 6, 5, 7, 7, 8];

const frecuencies = items.reduce((obj, el) => {
  if (!obj[el]) {
    obj[el] = 1;
  } else {
    obj[el] = obj[el] + 1;
  }

  return obj;
}, {});

console.log(frecuencies);

//# utilizar map y reduce para objetos

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const resultTwo = data
  .map((el) => el.level)
  .reduce((obj, el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] = obj[el] + 1;
    }

    return obj;
  }, {});

console.log(resultTwo);

// # agrupar por rangos

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];

const ranges = arr.reduce(
  (obj, el) => {
    if (el <= 5) {
      obj["1-5"]++;
    } else if (el <= 8) {
      obj["6-8"]++;
    } else {
      obj["9-10"]++;
    }
    return obj
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }
);

console.log(ranges);


