let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

var newArray = theBools.map(function(item){
    if(item == 0) return "woko"
    else return "wiki";
});
console.log(newArray);