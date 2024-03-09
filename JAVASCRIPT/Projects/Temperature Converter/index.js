
const textBox = document.getElementById('textBox');
const toFahrenheight = document.getElementById('toFahrenheight');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheight.checked){
        temp = Number(textBox.value)
        temp = (temp * (9/5) + 32).toFixed(2);
        result.textContent = temp + " degree Fahrenheit";
    }else if(toCelsius.checked) {
        temp = Number(textBox.value)
        temp = ((temp - 32) * (5/9)).toFixed(2);
        result.textContent = temp + " degree Celsius";
    }
    else{
        result.textContent = "Select a unit"
    }
}