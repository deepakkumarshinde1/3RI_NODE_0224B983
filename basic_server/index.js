console.log("Welcome");

function add() {
  let a = 20;
  let b = 30;
  let c = a + b;

  console.log(c);
}

add();

// import a module
// es5
const moduleName = require("moduleName");
// es6
import moduleName from "moduleName";

// export a module
// es5
module.exports = moduleName;
// es6
export default moduleName;

// common function
function abc() {}

// function expression
let pqr = function () {};
let pqr1 = () => {};

// callback function
abc(function () {});
abc(() => {});

// IIFE
(function () {})();

// let a;
// with arrow

(() => {})();
