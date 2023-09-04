// Objective
// Funktion för att räkna ut hur långt åska färdas per sekund
// funktion för att ta input i sekunder från användaren 
// Return the result and present it with explanatory text

  
const numberEntered = document.querySelector("#input1");
const output = document.getElementById("output1");


numberEntered.addEventListener("input", (e) => {
    const b = e.target.value;
    const c = b * 0.33;
    output.value = c;
})

output.addEventListener("input", (e) => { 
    numberEntered.value = e.target.value / 0.33;
})
