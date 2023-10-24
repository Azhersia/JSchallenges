import readline from "read-console-input";

let myArray = [1, 2, 3, 4];

const swapIndexes = (array, firstIndex, secondIndex) => {
  console.log(myArray)
  let saveValue = array[firstIndex]; // take first index value save it in variable
  array[firstIndex] = array[secondIndex]; // first index takes second index value
  array[secondIndex] = saveValue; // second index takes saveed value
};
const nmr1 = readline('number 0-3:');
const nmr2 = readline('number 0-3:');

swapIndexes(myArray, nmr1, nmr2);
console.log(myArray);