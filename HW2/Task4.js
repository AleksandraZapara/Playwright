 function getCircleLength(r){ 
        if (r <= 0 || isNaN(r)){
            throw new Error("Incorrect radius - please, enter a positive  numeric value!”");
        }
            return 2 * Math.PI * r;
    }

    try {
        let length = getCircleLength("1");
        console.log(length);
    } catch (error) {
        console.log(error.message);
        } 
        
            