//6- Return true if the given value is a number, false otherwise

const checkNumber = (value) => {
    if(typeof(value) === "number") {
        console.log("true")        
    } else {
        console.log("false");
    }
}

checkNumber("1231");