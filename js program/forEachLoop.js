const { log } = require("console");
const { LOADIPHLPAPI } = require("dns/promises");

const lang = ["js", "ruby", "java", "python", "golang"];
// lang.unshift("rust");

lang.forEach((item) => {
  //   console.log(item);
});

lang.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const myObj = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },

  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Golang",
    languageFileName: "go",
  },
];



// myObj.forEach((item) => {
// console.log(item.languageFileName);

// })

for (let i = 0; i < myObj.length; i++) {
  // console.log(myObj[i].languageFileName);
}

let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * 2;
}

function display(element){
  console.log(element);
  
}
