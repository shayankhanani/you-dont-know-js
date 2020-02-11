function nested() {
    "use strict";
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log( a, b, c ); // 1 2 3
        }
        baz();
        console.log( a, b, c ); // error c is not defined in method b
    }
    bar();
    console.log( a ); // 1
}

nested();