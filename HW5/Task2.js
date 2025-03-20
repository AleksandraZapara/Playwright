function countCars(cars) {
    const carsMap = new Map();

    for (const car of cars) {
        carsMap.set(car, (carsMap.get(car) || 0) + 1);
    }

    return carsMap;
}

const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));
