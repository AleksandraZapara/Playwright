let number = prompt("Please, enter the number");
if (number < 2) {
    console.log("is not a prime number.");
}
for (let i = 2; i <= Math.sqrt(number); i++) {
    
     if (number % i === 0) {
        console.log(number + " " + "is not a prime number.");
       break;
    } else {
        console.log(number + " " + "is a prime number.");
    }
}
