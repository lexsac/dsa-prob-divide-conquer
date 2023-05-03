/* Write a function called findRotationCount which accepts an array of distinct numbers 
    sorted in increasing order. The array has been rotated counter-clockwise n number of times. 
    Given such an array, find the value of n.

    findRotationCount([15, 18, 2, 3, 6, 12]) // 2
    findRotationCount([7, 9, 11, 12, 5]) // 4
    findRotationCount([7, 9, 11, 12, 15]) // 0

    findRotation(arr) {
        // find the index of the smallest value within the array 
        // compare the first value in the array with the last value in the arr
        // if it's less than the last value in the array, return 0
        // define startIndex = 0, endIndex = arr.length - 1;
        // while startIndex <= endIndex
            // let middleIndex equal the floored value of (startIndex + endIndex) / 2;
            // if ()
    }
*/

function findRotationCount(arr) {
    let rotationIndex = findRotation(arr);
    if (rotationIndex > 0) {
        return binarySearch(arr, 0, rotationIndex - 1);
    } else {
        return binarySearch(arr, rotationIndex, arr.length - 1);
    }
}

function binarySearch(arr, startIndex, endIndex) {
    if (arr.length === 0) return -1;

    while (startIndex <= endIndex) {
        let middleIdx = Math.floor((startIndex + endIndex) / 2);

        if (arr[middleIdx] === num) {
            return middleIdx;
        } else if (num < arr[middleIdx]) {
            endIndex = middleIdx - 1;
        } else {
            startIndex = middleIdx + 1;
        }
    }
    return -1;
}

function findRotation(arr) {
    if (arr[0] < arr[arr.length - 1]) return 0;

    let startIdx = 0; // 0
    let endIdx = arr.length - 1; // 5

    while (startIdx <= endIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        } else if (arr[startIdx] <= arr[middleIdx]) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }
}

module.exports = findRotationCount