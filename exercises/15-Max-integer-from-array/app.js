var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

var maxNumber = 0;

for(i=0; i<myArray.length; i++){
    let element = myArray[i];
    if(maxNumber - element > 0) maxNumber = maxNumber
    else maxNumber = element;
}
console.log(maxNumber);