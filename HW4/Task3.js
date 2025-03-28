class Plane {
        constructor(model, fuelSupply, fuelConsumption){
            this.model = model;
            this.fuelSupply = fuelSupply;
            this.fuelConsumption = fuelConsumption;
        }
        calcFlightRange() {
            return (this.fuelSupply / this.fuelConsumption) * 100;
        }
        static sortFlightRange(planesArray = []) {
            planesArray.sort((a, b) => a.calcFlightRange() - b.calcFlightRange());

        planesArray.forEach(plane => {
            console.log(`${plane.model}: ${plane.calcFlightRange()}`);
        });
     }
    }

    class TransportPlane extends Plane {
        constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
            super(model, fuelSupply, fuelConsumption);
            this.cargo = cargo; 
            this.addTank = addTank;
        }
    
        calcFlightRange() {
            const totalFuel = this.fuelSupply + this.addTank;
            return (totalFuel / this.fuelConsumption) * 100;
        }
    }

    class PassengerPlane extends Plane {
        constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
            super(model, fuelSupply, fuelConsumption);
            this.passengers = passengers;
            this.refueling = refueling;
        }
    
        calcFlightRange() {
            const totalFuel = this.fuelSupply + this.refueling;
            return (totalFuel / this.fuelConsumption) * 100;
        }}

        class WarPlane extends Plane {
            constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
                super(model, fuelSupply, fuelConsumption);
                this.missiles = missiles;
                this.aerodynamicsKoef = aerodynamicsKoef;
            }
        
            calcFlightRange() {
                return super.calcFlightRange() * this.aerodynamicsKoef;
            }
        }
        
     console.log("Unsorted range of planes:");
     const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
     console.log("An-225 Mriya: ", plane1.calcFlightRange());
     const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
     console.log("Boeing-747:", plane2.calcFlightRange());
     const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
     console.log("F-22 Raptor:", plane3.calcFlightRange());
     console.log("Sorted range of planes:");
     const planesArray = [plane1, plane2, plane3];
     Plane.sortFlightRange(planesArray);
     