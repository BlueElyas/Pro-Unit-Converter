const converterButton = document.getElementById("Convert-Button")

let lengthUnit = document.getElementById("Length")
let volumeUnit = document.getElementById("Volume")
let massUnit = document.getElementById("Mass")

const meterToLength = 3.281
const lengthToMeter = 1/meterToLength
const litersToGallons = 0.264
const gallonsToLiters = 1/litersToGallons
const kilosToPounds = 3.204
const poundsToKilos = 1/kilosToPounds


const baseValue = document.querySelector("#input-number")


converterButton.addEventListener("click", function lengthConverter () {
    lengthUnit.innerHTML = `
        ${baseValue.value} meters =  
        ${(baseValue.value * meterToLength).toFixed(3)} feet 
        | 
        ${baseValue.value} feet =
        ${(baseValue.value * lengthToMeter).toFixed(3)} meters 
        `
    volumeUnit.innerHTML = `
        ${baseValue.value} liters =  
        ${(baseValue.value * litersToGallons).toFixed(3)} gallons 
        | 
        ${baseValue.value} gallons = 
        ${(baseValue.value * gallonsToLiters).toFixed(3)} liters 
    `
    massUnit.innerHTML = `
        ${baseValue.value} kilos =  
        ${(baseValue.value * kilosToPounds).toFixed(3)} pounds 
        | 
        ${baseValue.value} pounds = 
        ${(baseValue.value * poundsToKilos).toFixed(3)} kilos 
    `
})