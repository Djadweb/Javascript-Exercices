//2- Decapitalize the first letter of a string

const decapitalise = str => {
    console.log(str.charAt(0).toLowerCase() + str.slice(1));
}

decapitalise("Djamel")