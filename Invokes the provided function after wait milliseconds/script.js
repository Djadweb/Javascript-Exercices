//16- Invokes the provided function after wait milliseconds

const delayFunction = (fn, time) => {
    setTimeout(fn, time);
}

const display = () => {
    window.alert('Delayed message');
}

delayFunction(display, 3000);