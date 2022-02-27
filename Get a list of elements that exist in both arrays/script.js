//20- Get a list of elements that exist in both arrays

const sameElements = (arr1, arr2) => {
    let list = [];
    arr1.forEach(el => {
        if(arr2.includes(el)) {
            list.push(el);
        }
    })
    return list;
}

console.log(sameElements([2, 3, 5, 8], [2, 8, 5]));