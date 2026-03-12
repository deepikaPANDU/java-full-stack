// Traditional function
function add(a, b) { return a + b; }

// Arrow function
const add2 = (a, b) => a + b;

// Single parameter
const double = n => n * 2;

// No parameters
const greet = () => console.log("Hello!");

console.log(add2(5, 3));   // 8
console.log(double(4));    // 8
greet();                   // Hello!