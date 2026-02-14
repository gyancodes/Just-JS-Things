// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const { log } = require("console");

// myNums.filter( (num) => num > 4);
// const newNums = myNums.filter( (num) => {
//     return num > 4
// });

// const newNums = [];

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log(newNums);

const nums = [1, 2, 3, 4, 5];

const total = nums.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);

// console.log(total);

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];






var celsius = fahrenheit.map((elem) => {
  return Math.round(((elem - 32) * 5) / 9);
});

// console.log(celsius);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((sq) => {
  return Math.pow(sq, 2);
});

// function square(element){
//   return Math.pow(element, 2)
// }
// console.log(squares);


const dates = ["2024-1-10","2025-2-20","2026-3-20"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
  const parts  = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`
}


