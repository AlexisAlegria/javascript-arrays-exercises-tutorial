var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

const myFunc = () => {
    var newArray = [];
    for(i=0; i<mix.length; i++){
        newArray.push(typeof mix[i]);
    }
    return newArray;
}
console.log(myFunc());