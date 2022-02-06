//********************************************


//Converts a specified number to an array of digits

// const toArray = n => {
//     console.log(Array.from(n.toString()))    
// }


//********************************************


//Decapitalize the first letter of a string

// const decapitalise = str => {
//     console.log(str.charAt(0).toLowerCase() + str.slice(1));
// }

// decapitalise("Djamel")



//********************************************


//Get a random number in the specified range

// const randomNumber = (a, b) => {
//     console.log(Math.random() * (b - a) + a);
// }

// randomNumber(3, 5)


//********************************************


//Count the occurrences of a value in an array

// const count = (myarray, value) => {
//     let nb=0;
//     for(el of myarray) {
//         if(el === value)
//             nb++;
//     }
//     console.log(nb)
// }


//********************************************


//Convert a given string into an array of words

// const toWordsArray = (string) => {
//     console.log(string.split(' '));
// }

// toWordsArray("My name is djamel");


//********************************************


//Return true if the given value is a number, false otherwise

// const checkNumber = (value) => {
//     if(typeof(value) === "number") {
//         console.log("true")        
//     } else {
//         console.log("false");
//     }
// }

// checkNumber("1231");



//********************************************


//Get the nth element of a given array

// const getElement = (array, n) => {
//     let element = array.slice(n-1, n);
//     console.log(element)
// }

// getElement([5, 2, 6, 88, 3, 102], 3);



//********************************************



//Truncate a string up to a specified length

// const truncate = (s, n) => {
//     console.log(s.substring(0, n));
// }

// truncate("AABBBSSSDD", 7);




//********************************************


//Reverse the order of the characters in the string

// const reverse = s => {
//     console.log(s.split('').reverse().join(''))
// }

// reverse("randomname")


//********************************************


//Redirect to a specified URL

// const redirect = (url) => {
//     window.location.href = url;
// }

// redirect("https://www.google.com")


//********************************************


//Get the last element from a given array

// const lastElement = (array) => {    
//     console.log(array[array.length - 1])
// }

// lastElement(['a', 'b', 'c', 'd', 'e', 'f'])