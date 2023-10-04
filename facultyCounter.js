import readline from "read-console-input";
const number = JSON.parse(readline('Give number: '));

let factorial = 1;

function calculate(number) {

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
}
calculate(number);
console.log('faculty of ' + number + ' is: ' + factorial);