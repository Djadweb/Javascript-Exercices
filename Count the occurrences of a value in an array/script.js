//3- Get a random number in the specified range

const randomNumber = (a, b) => {
    console.log(Math.random() * (b - a) + a);
}

randomNumber(3, 5)