//4- Count the occurrences of a value in an array

const count = (myarray, value) => {
    let nb=0;
    for(el of myarray) {
        if(el === value)
            nb++;
    }
    console.log(nb)
}