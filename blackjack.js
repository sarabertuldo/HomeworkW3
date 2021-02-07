document
.getElementById("submit")
.addEventListener("click", function () {
let nameInput = document.getElementById("nameInput").value;
let birthYear = document.getElementById("birthYear").value;
    if (birthYear.value < 2000) {
    window.location.href = "blackjackgame.html"
    }
    if (nameInput.length > 0)
    document.getElementById("errorMsg").innerText = "Please enter name"
    else {
    window.location.href = "http://www.google.com"
    }});