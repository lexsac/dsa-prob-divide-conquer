/* 
    Given an array of 1s and 0s which has all 1s first followed by all 0s, 
    write a function called countZeroes, which returns the number of zeroes in the array.

    Constraints: time complexity should be O(log n)

    With this in mind, it seems like this is a sorting problem, and we should be using some sort of divide and conquer approach. 
    We want to find the index of the FIRST zero

    // exampleArr = countZeroes([1, 1, 1, 0, 0, 0, 0, 0])
    // exampleArr = countZeroes([1, 1, 1, 1, 1, 0, 0, 0])
    // exampleArr = countZeroes([1, 1, 1, 1, 0, 0, 0, 0])


    -If arr length is 0, return 0
    -create a start index at 0, and an end index at arr.length - 1
    -Find the middle index of the arr (floor it to account for arr with odd number of inputs)
    -The left side is arr.slice(start index, middle index). The right side is arr.slice(midde index, end index)
    -If middle value equals zero and middle value - 1 equals 1 --> count middle index to the end of the array
    -If middle value equals zero and middle value - 1 equals 0 --> move to the left and repeat the process
        -start index = 0 (still)
        -end index = middle value - 1
    -If middle value does not equal zero, move to the right and repeat the process
        -start index = middle index 
        -repeat the process until we return the value
*/

// expect(countZeroes([1, 0, 0, 0, 0])).toBe(4)

function countZeroes(arr) {
    if (arr.length === 0) return 0;

    let leftIdx = 0; // 0
    let rightIdx = arr.length - 1; // 4

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2); // 2
        let middleVal = arr[middleIdx]; // 0

        if (middleVal === 0 && arr[middleIdx -1] === 0) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === 1 && arr[middleIdx +1] === 0) {
            return (rightIdx - (middleIdx + 1) + 1);
        } else if (middleVal === 1 && arr[middleIdx +1] === 1) {
            leftIdx = middleIdx + 1;
        } else {
            return (rightIdx - middleIdx + 1);
        }
    }

    return 0;
}

module.exports = countZeroes
