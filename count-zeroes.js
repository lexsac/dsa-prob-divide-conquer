/* 
    Given an array of 1s and 0s which has all 1s first followed by all 0s, 
    write a function called countZeroes, which returns the number of zeroes in the array.

    Constraints: time complexity should be O(log n)

    With this in mind, it seems like this is a sorting problem, and we should be using some sort of divide and conquer approach. 
    We want to find the index of the FIRST zero

    exampleArr = [1, 1, 1, 1, 0, 0, 0, 0]
    anotherArr = [1, 1, 1, 0, 0, 0, 0, 0]
    yetAnotherArr = [1, 1, 1, 1, 1, 0, 0, 0]

    We want to create a startIdx and endIdx (in the beginning, this will be 0 and arr.length - 1, which is 5)
    We want to create a loop
        -We want to look at the middleIdx, which would be Math.floor((startIdx + endIdx) / 2)
        -Ask: Is this equal to 0? 
            -If it is, we want to look at the left portion of the arr
            -If it's not, we want to look at the right portion of the arr
        
    
*/

function countZeroes() {
  
}

module.exports = countZeroes