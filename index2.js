let miles ="209.2142"
let kilometres =miles * 1.60934;
let formatted_output = `The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles.`;
console.log(formatted_output);

let heightInInches = 65; // Assuming height is 65 inches
let weightInPounds = 150; // Assuming weight is 150 pounds

// Conversion factors
const inchesToCm = 2.54;
const poundsToKilo = 0.453592;

// Convert height and weight to centimeters and kilograms
let heightInCm = heightInInches * inchesToCm;
let weightInKilo = weightInPounds * poundsToKilo;

// Calculate BMI
let heightInMeters = heightInCm / 100;
let bmi = weightInKilo / (heightInMeters * heightInMeters);

// Output the results
console.log(`Height: ${heightInCm} cm`);
console.log(`Weight: ${weightInKilo} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);