function findArrDiff(arr1 = [], arr2 = []) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            newArr.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i]) {
            newArr.push(arr2[i]);
        }
    } return newArr;
}
console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30])); // ["5", "0", "30"]
