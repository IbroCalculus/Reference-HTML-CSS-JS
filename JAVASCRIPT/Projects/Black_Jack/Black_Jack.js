
var cards = [];
var hasBlackJack = false;
var isAlive = false;
var message = "";

var summ = 0;

var message_el = document.getElementById("message_el");
var card_el = document.getElementById("card_el");
var txt_sum = document.getElementById("txt_sum");

function startGame(){
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();
     isAlive = true;
     cards = [firstCard, secondCard]
    renderGame()
}

// ${cards[0]} ${cards[1]}

function renderGame(){  
    card_el.innerHTML = `Cards:`  
if(summ < 21){
    message = "Do you want to draw a new card? 😎 &#128521; 😎"
    message_el.innerHTML = message;
    for(var i=0; i<cards.length; i++){
        card_el.innerHTML += ` ${cards[i]}`
    }
    txt_sum.innerHTML = `sum = ${summ}`
}
else if(summ === 21){
    message = "Wohoo! you've go Blackjack! &#128512; 😜😜😜"
    hasBlackJack = true;
    for(var i=0; i<cards.length; i++){
        card_el.innerHTML += ` ${cards[i]}`
    }
    txt_sum.innerHTML = `sum = ${summ}`
}
else if(summ > 21){
    message = "You're out of the game! 😭 &#128546; 😭"
    isAlive = false;
    message_el.innerHTML = message;
    for(var i=0; i<cards.length; i++){
        card_el.innerHTML += ` ${cards[i]}`
    }
    txt_sum.innerHTML = `sum = ${summ}`
}
}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
        var card = getRandomCard();
        summ += card;
        cards.push(card);
        // alert(cards);
        renderGame();
        // card_el.innerHTML = `Cards: ${summ-card} ${card}`
    }
}


function getRandomCard(){
    var randomValue =  Math.ceil((Math.random() * 13));
    if(randomValue > 10){
        return 10
    } else if(randomValue == 1){
        return 11
    }else return randomValue;

}