const print = console.log;

const a = 3;
print(typeof a);

const b = 'hello'
print(typeof b);

const c = {};
print(typeof c);

const d = [];
print(typeof d);
console.log(Object.prototype.toString.call(d));

function Person() {

}
print(typeof Person);

const e = new Person();
print(typeof e);
print(e instanceof Person);

print(typeof undefined);
print(typeof null); // returns Object => bug left not fixed

const z = function() {}

print(typeof z);