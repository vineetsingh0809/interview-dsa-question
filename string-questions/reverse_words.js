// Method 1

const reverseString = (givenString) => {
    return givenString.split("").reverse().join("");
}
console.log(reverseString("my name is ankit"))


// Method 2

const reverseWords = (str)=>{
    return str.trim().split(/\s+/).reverse().join(" ")
}
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  chandu ke chacha  "))


// Method 3

const reverseEachWord = (str) => {
    return str.split(" ").map((item)=>item.split("").reverse().join("")).join(" ")
}
console.log(reverseEachWord("This is a program"))