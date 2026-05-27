function convertTemperature() {
let temp = parseFloat(document.getElementById("temperature").value);
let scale = document.getElementById("scale").value;
if (isNaN(temp)) {
document.getElementById("celsiusResult").innerHTML = "0 °C";
document.getElementById("fahrenheitResult").innerHTML = "32 °F";
document.getElementById("kelvinResult").innerHTML = "273.15 K";
return;
}
let celsius;
let fahrenheit;
let kelvin;
if (scale === "celsius") {
5
celsius = temp;
fahrenheit = (temp * 9 / 5) + 32;
kelvin = temp + 273.15;
}
else if (scale === "fahrenheit") {
celsius = (temp - 32) * 5 / 9;
fahrenheit = temp;
kelvin = celsius + 273.15;
}
else if (scale === "kelvin") {
if (temp < 0) {
alert("Kelvin cannot be negative!");
return;
}
celsius = temp - 273.15;
fahrenheit = (celsius * 9 / 5) + 32;
kelvin = temp;
}
document.getElementById("celsiusResult").innerHTML =
`${celsius.toFixed(2)} °C`;
document.getElementById("fahrenheitResult").innerHTML =
`${fahrenheit.toFixed(2)} °F`;
document.getElementById("kelvinResult").innerHTML =
`${kelvin.toFixed(2)} K`;
}
function resetFields() {
document.getElementById("temperature").value = "";
document.getElementById("celsiusResult").innerHTML = "0 °C";
document.getElementById("fahrenheitResult").innerHTML = "32 °F";
document.getElementById("kelvinResult").innerHTML = "273.15 K";
}
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}