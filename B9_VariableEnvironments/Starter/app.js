function b() {
    var myVar;
    console.log(myVar, 'from b');
}

function a() {
    var myVar = 2;
    console.log(myVar, 'from a before calling b');
    b();
    console.log(myVar, 'from a after calling b');
}

var myVar = 1;
a();

console.log(myVar, 'from global scope');