// document.querySelector("img").classList.toggle("invisible");
var diceNum1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "dice" + diceNum1 + ".png";
var randomImageSource1 = "images/" + randomDiceImg1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var diceNum2 = Math.floor(Math.random()*6) +1;
var randomDiceImg2 = "dice" + diceNum2 + ".png";
var randomImageSource2 = "images/" + randomDiceImg2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(diceNum1 > diceNum2){
    document.querySelector("h1").innerHTML = "🥇 Player 1 WIN 🚩";
}
else if(diceNum1 < diceNum2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 WIN 🥇";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}