/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

// const testNum = (num) => {

//     return new Promise((resolved, rejected) => {
//         if (num > 10) {
//             resolved(num + ' is greater than 10')
//         } else {
//             rejected(num + ' is smaller than 10')
//         }
//     });
// };

// testNum(12)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))



/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/


const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (words) => {

    return new Promise((resolved) => {

        resolved(words.map(item => item.toUpperCase()))
    });

};
const sortWords = (array) => {

    return new Promise((resolved, rejected) => {

        if (array.every(array => {
            return typeof array === "string"
        })) {
            resolved(array.sort())
        } else {
            rejected("no string")
        }


    });
};

makeAllCaps(arrayOfWords)
    .then(result => console.log(result))

sortWords(complicatedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))


// call both functions, chain them together and log the result to the console