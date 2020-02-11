var a = 4;
console.log(a);
foo();
function foo() {
    a = 3;
    console.log( a ); // 3
    var a; // declaration is "hoisted" // to the top of `foo()`
}
console.log(a) // checking the value of a after the function is declaration and call

if(a){
    var a = "6";
    console.log('if block', a); // 6
}
console.log('after if block', a) // 6 because if and other block statement doesnt block off the scope

function nested() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log( a, b, c ); // 1 2 3
        }
        baz();
        console.log( a, b ); // 1 2
    }
    bar();
    console.log( a ); // 1
}
    
nested();

