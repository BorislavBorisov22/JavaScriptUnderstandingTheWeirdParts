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
print(john.getFullName());
print(jane.getFullName());