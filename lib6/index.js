import {PossibleWalls} from './PossibleWalls';

console.log("Beginning to compute all possible 48\" by 10\" walls.");
console.log("Please wait...");

let pw = new PossibleWalls(48, 10);

console.log(`Total possibilities: ${pw.getTotal()}`);
