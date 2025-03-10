function checkID() { 
    let idInput = prompt("Enter your ID between 1 and 1000");
    
    if (idInput.trim() === ""){
        throw new Error("ID cannot be empty. Please enter your ID");
    }else if (isNaN(idInput)) {
        throw new Error("Invalid ID. Please enter a number");  
    }else if (idInput < 1 || idInput > 1000) {
        throw new Error("Please enter your ID between 1 and 1000");
} 
alert(idInput + ": " + "Your ID has been passed verification");

}

try {
    checkID();
} catch (error) {
console.log(error.name);
console.log(error.message);
alert(error.message);
}
