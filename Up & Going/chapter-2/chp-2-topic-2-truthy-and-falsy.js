function truthyFalsy(a){
    return a ? console.log('truthy') : console.log('falsy');
}
truthyFalsy("");
truthyFalsy(0);
truthyFalsy([]);
truthyFalsy(NaN);
truthyFalsy("Good");
truthyFalsy({});
truthyFalsy(undefined);
truthyFalsy(false);
truthyFalsy(null);
truthyFalsy([1,2,4]);
