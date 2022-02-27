//18- Create an element from a string

const create = (string) => {
    let element = document.createElement('div');
    element.innerHTML = string;

    return element.firstElementChild
}

create('<h1>Title</h1>');