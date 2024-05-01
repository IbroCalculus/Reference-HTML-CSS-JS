const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector("card");
const apikey = "d13b52466e3e9cbc951e91116ff0d1dc";

weatherForm.addEventListener("submit", function(event){
    event.preventDefault();

    const city = cityInput.value;
    if(city){

    }
    else{
        displayError("Please enter a city");
    }

})

function getWeatherData(city){   
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {method: "GET"})
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }  
        return response.json();
    })
    .then(data => `${console.log(data)}\n ${console.log(data.name)}\n ${console.log(data.id)}`)
    .catch(error => console.log(error))
}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";

}