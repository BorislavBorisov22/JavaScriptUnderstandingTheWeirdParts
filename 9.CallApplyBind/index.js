function greet() {
    console.log('Hi');
}

const anonymousGreet = function() {
    const args = arguments;
    const arrayArgs = [].slice.call(arguments);
    console.log(arrayArgs.filter.call(arrayArgs, (a) => a.includes('somename')));
};

anonymousGreet('somename');
