/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputMetric = document.getElementById("input-metric")
const convertBtn = document.getElementById("convert-btn")
const lengthDisplay = document.getElementById("length-display")
const volumeDisplay = document.getElementById("volume-display")
const massDisplay = document.getElementById("mass-display")

convertBtn.addEventListener("click", function(){
    let value = inputMetric.value;
    lengthDisplay.textContent = `${value} meters = ${Number(value * 3.281).toFixed(3)} feet | ${value} feet = ${Number(value / 3.281).toFixed(3)} meters`
    
    volumeDisplay.textContent = `${value} liters = ${Number(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${Number(value / 0.264).toFixed(3)} meters`
    
    massDisplay.textContent = `${value} kilos = ${Number(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${Number(value / 2.204).toFixed(3)} kilos`
})