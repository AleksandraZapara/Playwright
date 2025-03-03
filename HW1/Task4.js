//  Написати умовну конструкцію, яка в залежності від значення набраного балу 
// по 100-бальній шкалі, виводитиме відповідний результат. 
// Зробити 2-ма різними способами через 2 різних умовних оператора.
//Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
//Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied!”
//Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
//Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
//Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”


// Method_1
/*let score = prompt("Enter the score");

if (isNaN(score)) {
    console.log("Please, enter the number");
} else if (score >= 0 && score <= 49) {
    console.log("Unsatisfied!");
} else if (score >= 50 && score <= 70) {
    console.log("Satisfied!");
} else if (score >= 71 && score <= 87) {
    console.log("Good!");
} else if (score >= 88 && score <= 100) {
    console.log("Excellent!");
} else {
    console.log("Incorrect assessment!!");
}*/

// Method_2
let score1 = Number(prompt("Enter the score"));

switch (true) {
   case (isNaN(score1)):
        console.log("Please, enter the number");
        break;
    case (score1 >= 0 && score1 <= 49):
        console.log("Unsatisfied!");
        break;
    case (score1 >= 50 && score1 <= 70):
        console.log("Satisfied!");
        break;
    case (score1 >= 71 && score1 <= 87):
        console.log("Good!");
        break;
    case (score1 >= 88 && score1 <= 100):
        console.log("Excellent!");
        break;
    default:
        console.log("Incorrect assessment!!");   
}