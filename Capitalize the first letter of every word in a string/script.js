//19- Capitalize the first letter of every word in a string

const capitalize = (string) => {    
    return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(capitalize("Hello from the other side"));