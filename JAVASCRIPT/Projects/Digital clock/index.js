let clock = document.getElementById('clock');

function updateClock(){
    var currentDateTime = new Date();
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();
    clock.textContent = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateClock, 1000);
}

updateClock();

// ALTERNATIVELY, We could use setInterval(updateClock, 1000).
// But the updateClock function will not contain setTimeout(updateClock, 1000);