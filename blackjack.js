let dealerChoice;
let playerChoice;
let stats = {
    win: 0,
    loss: 0,
    tie: 0,
};

// check to see if there are missing inputs from user, refer to formValidation
let errors = {
    name: true,
    birthday: true,
}

let nameInput = document.getElementById("nameInput").value;
let birthYear = document.getElementById("birthYear").value;

document.getElementById("username")
.addEventListener("blur", (e) => { 
    if (document.getElementById("nameInput").value.length < 0) {
        document.getElementById("errorMsg1").innerText =
        "Please enter name.";
        errors = true;
    } if (document.getElementById("birthYear").value.length >= 0) {
        document.getElementById("errorMsg2").innerText = 
        "Please enter birth year.";
        errors = true;
    }
    }
);

let suits = ["clubs", "diamonds", "hearts", "spades"];
let cardValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


// submit information, but check to see if user is appropriate age
document.getElementById("submit")
.addEventListener("click", function () {
// let nameInput = document.getElementById("nameInput").value;

    if (birthYear.value < 2000) {
    window.location.href = "/blackjackgame.html"
    }
    else {
    window.location.href = "http://www.google.com"
    }});