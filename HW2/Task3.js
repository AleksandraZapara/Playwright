// Method 1
const newArr = [];
function deleteItem(arr, item){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item){
            newArr.push(arr[i]);
        }
    } return newArr;
}
    console.log(deleteItem([3, 12, 16, 19, 21, 33], 21));

// Method 2

function deleteItem(arr, item){
                return arr.filter(el => el !== item);
            }

    console.log(deleteItem([3, 12, 16, 19, 21, 33], 33));
