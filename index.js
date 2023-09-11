const converterButton = document.getElementById("Convert-Button")

let lengthUnit = document.getElementById("Length")
let volumeUnit = document.getElementById("Volume")
let massUnit = document.getElementById("Mass")


function getVal () {
    const val = document.querySelector("#input-number").value
    return val
}

converterButton.addEventListener("click", function lengthConverter () {
    lengthUnit.innerHTML = `
        ${getVal()} meters =  
        ${(getVal() * 3.281).toFixed(3)} feet 
        | 
        ${getVal()} feet =
        ${(getVal() * 0.305).toFixed(3)} meters 
        `
    volumeUnit.innerHTML = `
        ${getVal()} liters =  
        ${(getVal() * 0.264).toFixed(3)} gallons 
        | 
        ${getVal()} gallons = 
        ${(getVal() * 3.788).toFixed(3)} liters 
    `
    massUnit.innerHTML = `
        ${getVal()} kilos =  
        ${(getVal() * 3.204).toFixed(3)} pounds 
        | 
        ${getVal()} pounds = 
        ${(getVal() * 0.454).toFixed(3)} kilos 
    `
})