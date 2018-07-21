var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;
function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if(days < 4){
        daysMessage.innerHTML = "Short trips are always worth it!";
    }
    else if(days < 7){
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else{
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }
    var hours = days * 24;
    var minutes = hours * 60; 
    var seconds = minutes * 60;
    var hoursMessage = document.getElementById("hoursMessage");
    var minutesMessage = document.getElementById("minutesMessage"); 
    var secondsMessage = document.getElementById("secondsMessage");
    hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
    minutesMessage.innerHTML = "Which means you'll be traveling for " + minutes + "minutes.";
    secondsMessage.innerHTML = "That means you'll be traveling for " + seconds + "seconds.";
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
}
timingNext.onclick = function(){
    document.getElementById("budgetSection").removeAttribute("hidden");
} 

var budgetInput = document.getElementById("tripBudget");
var enterBudget = document.getElementById('enterBudget') ;
enterBudget.onclick = x;
function x(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var budget = budgetInput.value;
    var ntd = budget * 30.59 ;
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg"); 
    var exchange10Msg = document.getElementById("exchange10Msg");
    var exchange500Msg = document.getElementById('exchange500Msg');
    tripExchangeMsg.innerHTML = "This means you'll need "+ ntd + "NTD for your trip."
    dailyExchangeMsg.innerHTML = "That means you can spend " + ntd/days + 'NTD per day.'
    exchange10Msg.innerHTML = "You'll need "+ 10*budget + "NTD for an item that would cost you 10USD."
    exchange500Msg.innerHTML = "You'll need "+ 500*budget + "NTD for an item that would cost you 500USD."
}

var images = ["images/Honeymoon-in-Taiwan.jpg", "images/Jiufen-taiwan-travel-photography-jake-and-dannie-26.jpg", "images/keelung-taiwan.jpg", "images/taiwan-mountains-xlarge.jpg" ];
var currentImage = 0;
setInterval(changeImage, 7000);
function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}