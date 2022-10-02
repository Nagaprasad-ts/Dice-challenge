var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
var randomImage1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImage1) // image 1

var randomNumber2 = Math.floor(Math.random()*6)+1; // 1-6
var randomImage2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImage2) // image 2

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw !"; // If draw
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"; // If less < great
} else {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"; // If great > less
}