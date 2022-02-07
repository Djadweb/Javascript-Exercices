//********************************************


//1- Converts a specified number to an array of digits

// const toArray = n => {
//     console.log(Array.from(n.toString()))    
// }


//********************************************


//2- Decapitalize the first letter of a string

// const decapitalise = str => {
//     console.log(str.charAt(0).toLowerCase() + str.slice(1));
// }

// decapitalise("Djamel")



//********************************************


//3- Get a random number in the specified range

// const randomNumber = (a, b) => {
//     console.log(Math.random() * (b - a) + a);
// }

// randomNumber(3, 5)


//********************************************


//4- Count the occurrences of a value in an array

// const count = (myarray, value) => {
//     let nb=0;
//     for(el of myarray) {
//         if(el === value)
//             nb++;
//     }
//     console.log(nb)
// }


//********************************************


//5- Convert a given string into an array of words

// const toWordsArray = (string) => {
//     console.log(string.split(' '));
// }

// toWordsArray("My name is djamel");


//********************************************


//6- Return true if the given value is a number, false otherwise

// const checkNumber = (value) => {
//     if(typeof(value) === "number") {
//         console.log("true")        
//     } else {
//         console.log("false");
//     }
// }

// checkNumber("1231");



//********************************************


//7- Get the nth element of a given array

// const getElement = (array, n) => {
//     let element = array.slice(n-1, n);
//     console.log(element)
// }

// getElement([5, 2, 6, 88, 3, 102], 3);



//********************************************



//8- Truncate a string up to a specified length

// const truncate = (s, n) => {
//     console.log(s.substring(0, n));
// }

// truncate("AABBBSSSDD", 7);




//********************************************


//9- Reverse the order of the characters in the string

// const reverse = s => {
//     console.log(s.split('').reverse().join(''))
// }

// reverse("randomname")


//********************************************


//10- Redirect to a specified URL

// const redirect = (url) => {
//     window.location.href = url;
// }

// redirect("https://www.google.com")


//********************************************


//11- Get the last element from a given array

// const lastElement = (array) => {    
//     console.log(array[array.length - 1])
// }

// lastElement(['a', 'b', 'c', 'd', 'e', 'f'])


//********************************************


//12- Check whether the given argument is a symbol

// const checkSymbol = (value) => {
//     if(typeof(value) === "symbol") {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// checkSymbol(Symbol("✌️"));


//********************************************


//13- Check if a given number is even or not

// const even = (number) => {
//     console.log(number % 2 === 0);
// }

// even(19)


//********************************************


//14 -Log the name of a function

// const getName = fName => {
//     console.log(fName.name);
// }

// getName(function testFunction() {
//     console.log("nothing");
// })



//********************************************


//15- Write a JavaScript program to calculate the factorial of a number.

// const fact = number => {
//     let factorial = 1;
//     for(let i=number; i>0; i--) {
//         factorial= factorial*i;
//     }    

//     console.log(factorial);
// }


//********************************************


//16- Invokes the provided function after wait milliseconds

// const delayFunction = (fn, time) => {
//     setTimeout(fn, time);
// }

// const display = () => {
//     window.alert('Delayed message');
// }

// delayFunction(display, 3000);


//********************************************


//17- Get the current URL

// const getUrl = () => {
//     console.log(window.location.href);
// }

// getUrl()