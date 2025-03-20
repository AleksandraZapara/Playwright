function getUserInfo({ firstName, lastName, contact: { email, phone }, address: { city } }) {
    return { firstName, lastName, email, phone, city };
}

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(getUserInfo(user));
