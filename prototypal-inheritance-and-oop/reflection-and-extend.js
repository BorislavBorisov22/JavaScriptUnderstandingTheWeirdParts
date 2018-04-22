const print = console.log;

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    print(this.firstName, 'says hi');
};

const newOperator = (func, ...args) => {
    const thisObj = {};
    thisObj.__proto__ = func.prototype;
    func.apply(thisObj, args);

    return thisObj;
};

const john = newOperator(Person, 'John', 'Doe');

print(john);
john.greet();
const jane = {
    address: 'Some address',
    getFormalFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const jim = {
    getFirstName() {
        return this.firstName;
    }
};

Object.assign(jim, john, jane);
print(jim.address);