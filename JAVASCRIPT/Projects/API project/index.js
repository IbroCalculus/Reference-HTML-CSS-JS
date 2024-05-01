

// https://pokeapi.co/

function fetchData(){
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');
    
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {method: "GET"})
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }  
        return response.json();
    })
    .then(data => {
        `${console.log(data)}\n ${console.log(data.name)}\n ${console.log(data.id)}`
        const pokemonSpriteURL = data.sprites.front_default
        console.log(pokemonSpriteURL);
        pokemonSprite.src = pokemonSpriteURL;
        pokemonSprite.style.display = "block";


    })
    .catch(error => console.log(error))
}


// ------------------- Using Async Await --------------------


async function fetchData2(){
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {method: "GET"});
        if(!response.ok) {
            throw new Error(response.statusText);
        }  
        const data = await response.json();
        
        console.log(data);
        console.log(data.name);
        console.log(data.id);
        const pokemonSpriteURL = data.sprites.front_default;
        console.log(pokemonSpriteURL);
        pokemonSprite.src = pokemonSpriteURL;
        pokemonSprite.style.display = "block";
    }
    catch(error){
        console.log(error);
    }
}