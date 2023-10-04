import readline from "read-console-input";

const number = Number(readline('Give number: '));

for (let i = 0; i < number; i++) {
  if (number > 0) {

    console.log(number * (number - 1))
  }
}


console.log('faculty of ' + number + ' is:');