var a;
console.log(typeof a);
a = "Hello"; //String
console.log(typeof a);
a = 42; //Number
console.log(typeof a);
a = true; //Boolean
console.log(typeof a);
a = null; //object
console.log(typeof a);
a = undefined; //undefined
console.log(typeof a);
a = {
    c : "b",
    status: false,
    j : 9,
    k : null
};
console.log(typeof a); //Object
console.log(a.k);
var arr = [
    "hello world",
    42,
    true
];
console.log(arr[2]); //Array
a = "42" //String
console.log("type of var a is: " + typeof a);
var b = Number(a); 
console.log("type of var b is: " + typeof b);

b = a * 2;
console.log("type of var b is after a * 2: " +  typeof b);