import readline from "read-console-input";

const sentence = readline('Type a sentance: ')
let letterCount
let numberCount


checkLength(sentence)

function checkLength(sentence) {
  letterCount = sentence.replace(/[^a-z]/g, "").length
  numberCount = sentence.replace(/[^0-9]/g, "").length
}

console.log("Letter count: " + letterCount);
console.log("Number count: " + numberCount);