const findMinAndMax = (arr)=>{
const sortedArr = arr.sort((a,b)=>a-b)
const minVal = sortedArr[0];
const maxVal = sortedArr[arr.length-1]
console.log("Minimum value in the array is :- ", minVal)
console.log("Maximum value in the array is :- ", maxVal)
}

const input1 = [22,45,66,32,11,87,19]
findMinAndMax(input1)

const minMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return {min, max}
}

const input2 = [12,44,31,90,56,78,51,99];
console.log(minMax(input2));

const array = [23,44,67,88,12];
let minValue = array.reduce((a,b)=> a < b ? a : b);
let maxValue = array.reduce((a,b)=> a > b ? a : b);
console.log(minValue, "is the minimum value in the array and", maxValue,"is the maximum value in the array");