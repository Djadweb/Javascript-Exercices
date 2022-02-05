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

const randomNumber = (a, b) => {
    console.log(Math.random() * (b - a) + a);
}

randomNumber(3, 5)