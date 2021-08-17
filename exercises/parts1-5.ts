// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import {SpaceLocation} from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kmToMars: number = 225000000;
let kmToMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
let milesToMars: number = kmToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):
console.log(`Part 2: It will take the shuttle ${spacecraftName} ${daysToMars} day(s) to reach Mars.`);

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kmAway: number): number {
    let milesAway: number = kmAway * milesPerKilometer;
    let hoursToLocation: number = milesAway / speedMph;
    return hoursToLocation / 24;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`Part 3: It will take the shuttle ${spacecraftName} ${getDaysToLocation(kmToMars)} day(s) to reach Mars.`);
console.log(`Part 3: It will take the shuttle ${spacecraftName} ${getDaysToLocation(kmToMoon)} day(s) to reach the Moon.`)

// Part 4: Create a Spacecraft Class
class Spacecraft {
    name: string;
    speedMph: number;
    milesPerKm: number = 0.621;
    constructor (name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kmAway: number): number {
        let milesAway: number = kmAway * this.milesPerKm;
        let hoursToLocation: number = milesAway / this.speedMph;
        return hoursToLocation / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kmAway)} days to get to ${location.name}.`);
    }
}

// Create an instance of the class here:
let shuttle = new Spacecraft(spacecraftName, speedMph);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`Part 4: It will take the shuttle ${shuttle.name} ${shuttle.getDaysToLocation(kmToMars)} day(s) to reach Mars.`);
console.log(`Part 4: It will take the shuttle ${shuttle.name} ${shuttle.getDaysToLocation(kmToMoon)} day(s) to reach the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
shuttle.printDaysToLocation(new SpaceLocation('Mars', kmToMars));
shuttle.printDaysToLocation(new SpaceLocation('the Moon', kmToMoon));