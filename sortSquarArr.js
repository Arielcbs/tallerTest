let  arr = [1, 2, 3, 5, 6, 8, 9];
let arr2 = [-2,-1];
let arr3 = [-10, -5, 0, 5, 10];


const sortNums = (a,b) => {
 return a-b;
}
const squaresArr = (arr) => {
    let squArr = [];
    arr.map( num => {
        squArr.push(num*num);
        squArr.sort(sortNums);
    })
    console.log(squArr);
}

squaresArr(arr3);