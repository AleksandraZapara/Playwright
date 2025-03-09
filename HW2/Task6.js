/*function findArrDiff(arr1 = [], arr2 = []) {
    const newArr = [];
 
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] !== arr2[j]) {
                newArr.push(arr1[i]);
                break;
            }
    }

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] !== arr1[j]) {
                newArr.push(arr2[i]);
                break;
            }
        }
        return newArr; 
    }
}}

console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30])); // ["5", "0", "30"]*/

function findArrDiff(arr1 = [], arr2 = []) {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            newArr.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i]) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;
}
console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30])); // ["5", "0", "30"]
