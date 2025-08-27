const reverseAnArray = (arr)=>{
    let result = [];
    for (let i = arr.length-1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}

const input1 = [1,2,3,4,5];
const myRes = reverseAnArray(input1)
console.log(myRes)

const input2 = [1,2,3,4];
const result = input2.reverse();
console.log(result)

const reverseUsingSwap = (arr)=>{
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let temp = arr[left];
        arr[left]=arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}

const input3 = ["a","b","c","d","e"];
console.log(reverseUsingSwap(input3))