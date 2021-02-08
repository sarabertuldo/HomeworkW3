let suits = ["clubs", "diamonds", "hearts", "spades"];
let faces = [{value: 11, face: "Ace",}, {value: 2, face: "Two"}, {value: 3, face: "Three"}, {value: 4, face: "Four"}, 
{value: 5, face: "Five"}, {value: 6, face: "Six"}, {value: 7, face: "Seven"}, {value: 8, face: "Eight"},
{value: 9, face: "Nine"}, {value: 10, face: "Ten"}, {value: 10, face: "Jack"}, {value: 10, face: "Queen"},
{value: 10, face: "King"}];
let deck = [];

// start game by building the deck
function buildDeck() {
    let deck = new Array();
    for (let i = 0; i < suits.length; i++)
    {
        for (let x = 0; x < faces.length; x++)
        {
            let card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
        }
        }
        return deck;
    }

// shuffle deck
function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * i);
            let temp = deck[i]
            deck[i] = deck[j];
            deck[j] = temp;
    }
}
