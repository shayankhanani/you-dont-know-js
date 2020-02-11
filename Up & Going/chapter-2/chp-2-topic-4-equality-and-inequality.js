var a = 2;
var b = "2";
var k = "3"
a == b ? console.log("Equal") : console.log("Inequal");
a === b ? console.log("Equal") : console.log("Inequal");
var c = 3;
b < c ? console.log("Equal") : console.log("Inequal"); //both are corced to be numbers
c > a ? console.log("Equal") : console.log("Inequal");
b < k ? console.log("Equal") : console.log("Inequal"); //comparison is made lexicographically (aka alphabetically like a dictionary)
var d = [1,2,3];
var e = [1,2,3];
var f = "1,2,3"
d == e ? console.log("Equal") : console.log("Inequal");
f == e ? console.log("Equal") : console.log("Inequal");
d === e ? console.log("Equal") : console.log("Inequal");
f === e ? console.log("Equal") : console.log("Inequal");
