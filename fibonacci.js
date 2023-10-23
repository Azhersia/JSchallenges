import readline from "read-console-input";

let fibNmr1 = 0;
let fibNmr2 = 1;
let nextFibonacci;

const numberofFibb = readline('How many fibonacci numbers to generate: ')

for (let i = 0; i < numberofFibb; i++) {

  nextFibonacci = fibNmr1 + fibNmr2; // adds numbers and stores
  fibNmr1 = fibNmr2; // moves second value to first number
  fibNmr2 = nextFibonacci; // gives the sum as new second number value
  console.log(fibNmr1);
}