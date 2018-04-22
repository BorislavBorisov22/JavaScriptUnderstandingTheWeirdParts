// polyfill
if (!Object.create) {
    return function(o) {
        function F() {};
        F.prototype = o;
        return new F();
    };
}

const person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function() {
        return `Hi ${this.firstName}`
    }
};

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john);