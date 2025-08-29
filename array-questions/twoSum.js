// Method 1

const twoSum = (array, target) =>{
    for (let i = 0; i < array.length; i++) {
       for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j]===target){
                return [i,j]
            } else {
                return "Unable to find!"
            }
       }
    }
}

const arr1 = [12,34,22,10,67,90,76];
const targetNum = 157;
console.log("Method 1 solution :-",twoSum(arr1, targetNum));

// Method 2

const classicTwoSum = (nums, target)=>{
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target-nums[i]
        if (map.has(complement)) {
        return [map.get(complement),i]
    }
    map.set(nums[i],i)
    }
    
}

console.log("Method 2 solution :-",classicTwoSum(arr1, targetNum))