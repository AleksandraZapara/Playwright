function processData(num1 = 0, num2 = 0, action = "sum" ) {
    if (action === "sum") {
        return num1 + num2;
    } else if (action === "product") {
        return num1 * num2;
    } else if (action === "square") {
        return num1 ** num2;
    } else {
        return "Please, enter the correct action";
}}

console.log(processData(10, 4, "product"));		// 40
