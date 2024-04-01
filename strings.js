//Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const inputString = "The Quick Brown Fox";

const outputString = swapCase(inputString);

//function declaration
function swapCase(str) {
  // variable to store the swapped str
  let word = " ";

  //use of for loop
  for (let i = 0; i < str.length; i++) {
    // checks if the words are in uppercase
    if (str[i] === str[i].toUpperCase()) {
      // check if the words are in uppercase to convert it to lowercase
      word += str[i].toLowerCase();
    } else {
      // convert lowercase to upeercase
      word += str[i].toUpperCase();
    }
  }
  // retruning value
  return word;
}

console.log(outputString);
