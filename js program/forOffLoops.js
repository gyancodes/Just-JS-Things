const { log } = require("console");

let cars = ["Tata", "Mahindra", "Tesla"];
for (let car of cars) {
  console.log(car);
}

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = [];

for (let i = 0; i < fahrenheit.length; i++) {
  const f = fahrenheit[i];
  const c = ((f - 32) * 5 / 9).toFixed(1)
  celsius.push(c)
}

console.log(celsius);

fahrenheit.filter()