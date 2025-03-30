let employee: {name: string; profession: string; workingHoursPerDay: number} = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

let premiumData: {isPremium: boolean; premium: number} = {
    isPremium: true,
    premium: 1000
};

const payPerHour: number = 32;
const workingDays: number = 14;
const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

function getSalaryInfo(experienceCoefficient: number): string {
    let salary: number;

    if (premiumData.isPremium) {
        salary = employee.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient + premiumData.premium;
    } else {
        salary = employee.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    }
    
    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
}

console.log(getSalaryInfo(experienceCoefficients[2]));