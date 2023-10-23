import readline from "read-console-input";

const inputString = readline("give word: ")

function checkPalindrome() {
  let stringCharaters = inputString.split('')
  let reversedCharacters = stringCharaters.reverse()

  if (stringCharaters == reversedCharacters) {
    console.log("word is palindrome");
  } else {
    console.log("not palindrome")
  }
}
checkPalindrome()