// Given a sorted array and a number, write a function called sortedFrequency 
// that counts the occurrences of the number in the array

/* 
    Constraints: O(log n) time complexity 
    
    Examples: 
        sortedFrequency([1,1,2,2,2,2,3],3) // 1
        sortedFrequency([1,1,2,2,2,2,3],1) // 2
        sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/

function sortedFrequency(arr, num) {
    // Check if array is empty - if so, return 0
    if (arr.length === 0) return 0;
    // startIdx, and endIdx, which will equal 0 and arr.length - 1 
    let startIdx = 0;
    let endIdx = arr.length - 1;

    // While startIdx is less than or equal to endIdx,
    while (startIdx <= endIdx) {
        // Find the middleIdx
        let middleIdx = Math.floor((startIdx + endIdx) / 2);

        // If the middleIdx equals num and the middleIdx - 1 does not equal num, 
        if (arr[middleIdx] === num && arr[middleIdx - 1] !== num) {
            // return count from middleIdx to end
            return (endIdx - middleIdx + 1);
        } 
        // If the middleIdx equals num and middleIdx - 1 equals num, 
        else if (arr[middleIdx] === num && arr[middleIdx - 1] === num) {
            // focus on the left side
            rightIdx = middleIdx - 1;
        } 
        // If the middleidx does not equal num, 
        else if (arr[middleIdx] !== num) {
            // focus on the right side
            leftIdx = middleIdx + 1;
        } 
        // else, return number of nums
        else {
            return (endIdx - middleIdx + 1);
        }
        
        // return 0
        return 0;
    }


}

module.exports = sortedFrequency