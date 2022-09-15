let items = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let firstCard = 0;

let secondCard = 0;

let sum = 0;

let hasBlackjack = false;

let isAlive = false;

let isStartGameAlive = true;

let message = "";

let cards = [];

let player = {
  name: "",
  chips: 200,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let newCardButton = document.getElementById("newCardButton");
let startGameButton = document.getElementById("startGameButton");
let nextDealButton = document.getElementById("nextDealButton");
let foldButton = document.getElementById("foldButton");

newCardButton.style.visibility = "hidden";
foldButton.style.visibility = "hidden";
nextDealButton.style.visibility = "hidden";

function startNewGame() {
  player.chips = 200;
  hasBlackjack = false;
  isAlive = true;
  newCardButton.style.visibility = "visible";
  foldButton.style.visibility = "visible";
  startGameButton.style.visibility = "hidden";
  nextDealButton.style.visibility = "hidden";

  player.name = prompt("Enter your name");

  if (isStartGameAlive === true && player.name !== '' && player.name !== null) {
    playerEl.textContent =
      "Player: " + player.name + " Chips: " + player.chips + "$";

    firstCard = items[Math.floor(Math.random() * (items.length - 1))];

    secondCard = items[Math.floor(Math.random() * (items.length - 1))];

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
  } else {
    message = "You did not enter your name!"
    isAlive = false;
    cardsEl.textContent = '';
    sumEl.textContent = '';
    playerEl.textContent = '';
    newCardButton.style.visibility = "hidden";
    foldButton.style.visibility = "hidden";
    startGameButton.style.visibility = "visible";
  }

  messageEl.textContent = message;
}

function renderGame() {
  isStartGameAlive = false;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isStartGameAlive = false;
  } else if (sum === 21) {
    message = `Congratulations, You've got Blackjack!`;
    player.chips += 100;
    hasBlackjack = true;
    isStartGameAlive = true;
    startGameButton.style.visibility = "visible";
    newCardButton.style.visibility = "hidden";
    foldButton.style.visibility = "hidden";
    nextDealButton.style.visibility = "visible";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 20;
    isStartGameAlive = true;
    startGameButton.style.visibility = "visible";
    newCardButton.style.visibility = "hidden";
    foldButton.style.visibility = "hidden";
    nextDealButton.style.visibility = "visible";
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = items[Math.floor(Math.random() * (items.length - 1))];
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function fold() {
  message = "You folded!";
  player.chips -= 5;
  messageEl.textContent = message;
  isAlive = false;
  isStartGameAlive = true;
  startGameButton.style.visibility = "visible";
  newCardButton.style.visibility = "hidden";
  foldButton.style.visibility = "hidden";
  nextDealButton.style.visibility = "visible";
}

function nextDeal() {
  hasBlackjack = false;
  isAlive = true;
  newCardButton.style.visibility = "visible";
  foldButton.style.visibility = "visible";
  startGameButton.style.visibility = "hidden";
  nextDealButton.style.visibility = "hidden";

  if (isStartGameAlive === true) {
    playerEl.textContent =
      "Player: " + player.name + " Chips: " + player.chips + "$";

    firstCard = items[Math.floor(Math.random() * (items.length - 1))];

    secondCard = items[Math.floor(Math.random() * (items.length - 1))];

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
  }
}
