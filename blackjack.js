let gameStarted = false;

let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();

let playGame = document.getElementById("playGame");
let hit = document.getElementById("hit");
let stay = document.getElementById("stay");

playGame.addEventListener("click", function () {
    console.log("Play Game");
})

hit.addEventListener("click", function () {
    console.log("Hit");
})

stay.addEventListener("click", function () {
    console.log("Stay");
})