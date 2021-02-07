let playGame = document.getElementById("playGame");
let hit = document.getElementById("hit");
let stay = document.getElementById("stay");


// game starts, two cards show up
playGame.addEventListener("click", function () {
    console.log("Play Game Test");
})

// new card should pop up, able to hit 3 times at maximum
hit.addEventListener("click", function () {
    console.log("Hit Test");
})

// check sum of cards versus dealer's sum of cards, determine winner
stay.addEventListener("click", function () {
    console.log("Stay Test");
})

let dealerSum
let playerSum

 if (playerSum > dealerSum) {
     console.log("Player Wins")
 }
 if (playerSum === 21) {
     console.log("Player wins")
 }
 if (playerSum > 21) {
     console.log("Dealer Wins")
 } else (playerSum < dealerSum) {
     console.log("Dealer Wins")
 }
 else if (playerSum === dealerSum) {
     console.log("It is a tie!")
 }