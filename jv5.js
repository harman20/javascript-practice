

let firstArray=[1,2,5];
let secondArray=[3,4,6];

let thirdArray = [...firstArray, ...secondArray];    

console.log(thirdArray);  //[1,2,5,3,4,6]

thirdArray.sort((a,b )=>{
    if(a>b) 
    return 1;
    else
    return 0;
});
console.log(thirdArray); //[1,2,3,4,5,6]

let middleIndex = ((0+thirdArray.length)/2);
console.log(middleIndex); //3
console.log(thirdArray[middleIndex]); //4

