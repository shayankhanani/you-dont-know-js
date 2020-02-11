var a = 9;
if(a == 3){
    console.log("Value Matched: "+ a);
}
else if (a == 9){
    console.log("Value Matched: "+ a);
}
else{
    console.log("No Match: "+ a);
}

switch (a){
    case a < 3:
        console.log("Value Matched: "+ a);
        break;
    case 9:
        console.log("Value Matched: "+ a);
        break;
    default:
        console.log("No Match: "+ a);
}