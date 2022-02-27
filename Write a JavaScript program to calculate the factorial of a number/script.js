//15- Write a JavaScript program to calculate the factorial of a number.

const fact = number => {
    let factorial = 1;
    for(let i=number; i>0; i--) {
        factorial= factorial*i;
    }    

    console.log(factorial);
}