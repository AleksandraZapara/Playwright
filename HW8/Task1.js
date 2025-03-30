var employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};
var premiumData = {
    isPremium: true,
    premium: 1000
};
var payPerHour = 32;
var workingDays = 14;
var experienceCoefficients = [1, 1.1, 1.2, 1.3, 1.5];
function getSalaryInfo(experienceCoefficient) {
    var salary;
    if (premiumData.isPremium) {
        salary = employee.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient + premiumData.premium;
    }
    else {
        salary = employee.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    }
    return "".concat(employee.profession, " ").concat(employee.name, " has a salary of ").concat(salary, "$ this month");
}
console.log(getSalaryInfo(experienceCoefficients[2]));
