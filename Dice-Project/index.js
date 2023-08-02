var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Use the random number to select imgs from dice1 to dice6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice2.png
// Change the attribute value source
// from static to dynamic img
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

//Start to change the attribute
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);
// So, every time we refresh the website, we get a new img1


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// So, there are 2 imgs refreshing every time we refresh the website

// Title: it changes with the result of what we get

// If Player 1 wins
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw! Cool!";
}