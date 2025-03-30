function processData(param) {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else if (typeof param === "number") {
        return param * param;
    }
    else if (typeof param === "boolean") {
        return !param;
    }
    else if (Array.isArray(param)) {
        var newArr = [];
        if (param.length === 0) {
            return "Empty array: []";
        }
        else {
            for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
                var num = param_1[_i];
                newArr.push(num * num);
            }
            return newArr;
        }
    }
    throw new Error("Unsupported data type");
}
console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // "Empty array: []"
