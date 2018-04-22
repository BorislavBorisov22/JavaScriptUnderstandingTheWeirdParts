// statement because it does not result in a value
function greet() {
    console.log('Hi');
}

// expression because the function results in a value
const anonymousGreet = function() {
    console.log('Hi');
};

function* genId() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

const gen = genId();
for (let i = 0; i < 10; i++) {
    console.log(gen.next().value);
}