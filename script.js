// Objevtive
// Funktion för att räkna ut hur långt åska färdas per sekund
// funktion för att ta input i sekunder från användaren 
// Return the result and present it with explanatory text


// const travelPerSecond = () => {
//     document.getElementById("input1")
// let distance = input1 * 0.33;
// return distance;
// }
// console.log(`Sound travels by 0.33 kometers per second and x seconds tells us that thunder struck ${travelPerSecond()} kilometers away`)


// function travelPerSecond(){
    
//     data[0] = document.getElementsByName('input1')[0].value;

//     console.log(data); // Check the console for the values for every click.
// return data;   

let numberEntered = document.getElementById("input1");

numberEntered.addEventListener("input", function() {
    let b = this.value;
    let c = b * 0.33;
    output.value = c;
})

let output = document.getElementById("output1");

