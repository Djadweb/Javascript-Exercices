
//7- Get the nth element of a given array

const getElement = (array, n) => {
    let element = array.slice(n-1, n);
    console.log(element)
}

getElement([5, 2, 6, 88, 3, 102], 3);