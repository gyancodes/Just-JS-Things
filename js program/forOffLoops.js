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
