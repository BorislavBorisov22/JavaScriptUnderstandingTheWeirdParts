// statement because it does not result in a value
function greet() {
    console.log('Hi');
}

// expression because the function results in a value
const anonymousGreet = function() {
    const args = arguments;
    const arrayArgs = [].slice.call(arguments);
    console.log(arrayArgs.filter.call(arrayArgs, (a) => a.includes('somename')));
};

anonymousGreet('somename');
