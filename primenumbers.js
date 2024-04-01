//You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].


// array iteration

//creating array to store numbers
 const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const primeNumbersArray = getPrimeNumbers(input);


function sumPrime(number) {

    //Iteration through each number in the array
  if (number <= 1) {
    return false;
  }

  // checking if the number is divisible by any numbers  from 2 to the square root of the number 
  for (let i = 2; i <= Math.sqrt(number); i++) {

    //if the number is divisible
    if (number % i === 0) {
    //use of for loop
      return false;
    }
  }
  //returning value
  return true;
}


 
function getPrimeNumbers(array) {

    // creating an empty array to store the prime numbers
  const primeNumbers = [];

    //use of for loop
  for (let i = 0; i < array.length; i++) {

    //if the number is prime add it to the primenumbers array
    if (sumPrime(array[i])) {
      primeNumbers.push(array[i]);
    }
  }

  // returning the array of the prime numbers 
  return primeNumbers;
}


console.log(primeNumbersArray);
