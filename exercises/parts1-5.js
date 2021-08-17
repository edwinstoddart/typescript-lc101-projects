"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kmToMars = 225000000;
var kmToMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kmToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log("Part 2: It will take the shuttle " + spacecraftName + " " + daysToMars + " day(s) to reach Mars.");
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kmAway) {
    var milesAway = kmAway * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    return hoursToLocation / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("Part 3: It will take the shuttle " + spacecraftName + " " + getDaysToLocation(kmToMars) + " day(s) to reach Mars.");
console.log("Part 3: It will take the shuttle " + spacecraftName + " " + getDaysToLocation(kmToMoon) + " day(s) to reach the Moon.");
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKm = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kmAway) {
        var milesAway = kmAway * this.milesPerKm;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kmAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var shuttle = new Spacecraft(spacecraftName, speedMph);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("Part 4: It will take the shuttle " + shuttle.name + " " + shuttle.getDaysToLocation(kmToMars) + " day(s) to reach Mars.");
console.log("Part 4: It will take the shuttle " + shuttle.name + " " + shuttle.getDaysToLocation(kmToMoon) + " day(s) to reach the Moon.");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kmToMars));
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kmToMoon));
