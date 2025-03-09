function findElem(arr, el){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el){
            return true;
        }  
    }
return false;
}

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));		// false
console.log(findElem(arr, "Alex")); // true
