//1
let add = (a, b) => {
  return a + b;
};
console.log(add(5, 10));

//2
minus = function (a, b) {
  return a - b;
};
console.log(minus(10, 5));

//3

let number = (num) => {
  if (num % 2 === 0) {
    return `${num} ლუწია`;
  } else {
    return `${num} კენტია`;
  }
};
console.log(number(18));

//4
function multiply(a, b, callback) {
  return callback(a, b);
}

let mult = (a, b) => {
  return a * b;
};

console.log(multiply(5, 5, mult));

//5

let numb = (numbe) => {
  if (numbe > 0) {
    return `${numbe} დადებითია`;
  } else if (numbe < 0) {
    return `${numbe} უარყოფითია`;
  } else {
    return `ნულის ტოლია`;
  }
};
console.log(numb(50));

//6

twice = function (a) {
  return a * 2;
};
console.log(twice(30));

//7
function orjer(a, callback) {
  return callback(a);
}

let gaor = (a) => {
  return a * 2;
};

console.log(orjer(60, gaor));

//8

let IsDivisibleByThree = (num) => {
  if (num % 3 === 0) {
    return `${num} 3ის ჯერადია`;
  } else {
    return `${num} არ არის 3ის ჯერადი`;
  }
};

console.log(IsDivisibleByThree(9));

//9
function IsNumOdd(num, callback) {
  return callback(num);
}

let Odd = (num) => {
  if (num % 2 == 0) {
    return `${num} არის ლუწი`;
  } else {
    return `${num} არის კენტი`;
  }
};

console.log(IsNumOdd(10, Odd));

//10

let Cube = (num) => {
  return num * num * num;
};

console.log(Cube(3));

//11
function gamr(a, b, callback) {
  return callback(a, b);
}
let multy = (a, b) => {
  return a * b;
};
console.log(gamr(50, 30, multy));

//12

let ber = (a) => {
  if (a > 0) {
    return `${a} მეტია 0ზე`;
  } else if (a === 0) {
    return "0ის ტოლია";
  } else {
    return `${a} ნაკლებია 0ზე`;
  }
};
console.log(ber(10));

//13

halfed = function (num) {
  return num / 2;
};
console.log(halfed(30));

//14
let two = (a, b, callback) => {
  return callback(a, b);
};

let sum = (a, b) => {
  return a + b;
};
console.log(two(87, 33, sum));

//15

let square = (nm) => {
  return nm * nm;
};
console.log(square(87));
