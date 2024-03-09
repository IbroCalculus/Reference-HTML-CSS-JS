
let count = 0;
counterLabel = document.getElementById("countLabel");
btnIncrease = document.getElementById("btnIncrease");
btnDecrease = document.getElementById("btnDecrease");
btnReset = document.getElementById("btnReset");

counterLabel.textContent = count;

btnIncrease.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}

btnDecrease.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}

btnReset.onclick = function(){
    count = 0
    document.getElementById("countLabel").textContent = count;
}
