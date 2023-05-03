/*
    Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
    The function should return the index of num in the array. If the value is not found, return -1.

    Time Complexity: 0(log n)


    findRotatedIndex([3, 4, 1, 2],4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
    findRotatedIndex([6, 7, 1, 2, 3, 4, 5], 12) // -1


    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2

    create a function called findRotationIndex(arr) that finds the index of the rotation within the given array
    startIdx = 0, endIdx = arr.length - 1
    while startIdx <= endIdx,
        find the middleIdx, and compare it to the middleIdx + 1, middleIdx - 1
        if the arr[middleIdx] is less than each of these numbers, then we have found the rotation index
        otherwise, if arr[middleIdx] is greater than arr[middleIdx - 1], we focus on the right side of the array and repeat
        other, if arr[middleIdx] is less than arr[middleIdx + 1], we focus on the left side of the array and repeat

    }
*/

function findRotatedIndex(arr, num) {
    let rotationIndex = findRotation(arr);
    if (rotationIndex > 0 && num >= arr[0] && num <= arr[rotationIndex - 1]) {
        return binarySearch(arr, num, 0, rotationIndex - 1);
    } else {
        return binarySearch(arr, num, rotationIndex, arr.length - 1);
    }
}

function binarySearch(arr, num, startIndex, endIndex) {
    if (arr.length === 0) return -1;
    if (num < arr[startIndex] || num > arr[endIndex]) return -1;

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

// example arr with arr.length === 6: [37,44,66,102,10,22]
// example arr with arr.length === 6: [10,22,37,44,66,102]
// example arr with arr.length === 6: [66,102,10,22,37,44]

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

module.exports = findRotatedIndex