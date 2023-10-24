import readline from "read-console-input";
const number = JSON.parse(readline('Give number: '));

let factorial = 1;

function calculate() {
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
}
calculate();
console.log('faculty of ' + number + ' is: ' + factorial);