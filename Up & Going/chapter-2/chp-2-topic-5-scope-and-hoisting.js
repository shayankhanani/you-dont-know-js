var a = 4;
console.log(a);
foo();
function foo() {
    a = 3;
    console.log( a ); // 3
    var a; // declaration is "hoisted" // to the top of `foo()`
}

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

