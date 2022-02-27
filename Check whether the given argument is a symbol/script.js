//12- Check whether the given argument is a symbol

const checkSymbol = (value) => {
    if(typeof(value) === "symbol") {
        console.log("true");
    } else {
        console.log("false");
    }
}

checkSymbol(Symbol("✌️"));