//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].


const numbers =  [numOne = -4, numTwo =7]

const results = generateArray(numOne, numTwo);

    //function to generate an array between two numbers
function  generateArray(one, two) {

    // array to store the generated numbers 
    const array = [];

    ///Iteration from the start the end
    for (let i = one; i <= two; i++) {


        //  use of an .push () method so that it can add the current number to the array
        array.push(i);
    }
    //return the generated array
    return array;
}



console.log(results);

