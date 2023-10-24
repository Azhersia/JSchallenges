import readline from "read-console-input";

const nmr1 = Number(readline('First number: '))
const nmr2 = Number(readline('second number: '))
const nmr3 = Number(readline('third number: '))
const nmr4 = Number(readline('fourth number: '))
const nmr5 = Number(readline('fifth number: '))

let result;

function calcAverage(nmr1, nmr2, nmr3, nmr4, nmr5) {
  let added = nmr1 + nmr2 + nmr3 + nmr4 + nmr5;
  result = added / 5;
}
calcAverage(nmr1, nmr2, nmr3, nmr4, nmr5);

console.log(result);
