//14 -Log the name of a function

const getName = fName => {
    console.log(fName.name);
}

getName(function testFunction() {
    console.log("nothing");
})