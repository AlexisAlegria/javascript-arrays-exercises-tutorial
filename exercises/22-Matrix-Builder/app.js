// var element = [];
// const matrixBuilder = (value) =>{
//     for(i=0; i<=value; i++){
//         element = element[i][j];
//         for(j=0; j<=value; j++)
//         element[i][j] = Math.floor((Math.random()*1))
//     }
//     return element;
// }
// console.log(matrixBuilder(5))

const matrixBuilder = (matrix) => {

    let newMatrix = [];
    let newArray = [];

    for(i=0; i < matrix; i++){
        newMatrix.push(newArray);
    }
    for(j=0; j < matrix; j++){
        newArray.push(Math.floor(Math.random()*1));
    }
    return newMatrix;
}
console.log(matrixBuilder(5));