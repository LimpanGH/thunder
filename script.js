// Objevtive
// Funktion för att räkna ut hur långt åska färdas per sekund
// funktion för att ta input i sekunder från användaren 
// Return the result and present it with explanatory text


const travelPerSecond = (seconds) => {
let distance = seconds * 0.33;
return distance;
}
console.log(`Sound travels by 0.33 kometers per second and x seconds tells us that thunder struck ${travelPerSecond(3)} kilometers away`)