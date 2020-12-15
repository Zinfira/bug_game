const difficulty = document.getElementsByClassName("difficulty");
const easyLevelButton = document.getElementById("easy");
const mediumLevelButton = document.getElementById("medium");
const hardLevelButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const allButtons = document.querySelectorAll(".difficulty__level");
const cardRoom = document.createElement("div");
const cardTable = document.createElement("div");
cardRoom.classList.add("card-room");
cardTable.classList.add("card-table");
const gameBoard = document.querySelector(".game-background");
const allCards = document.querySelectorAll(".card");

function toStart () {
  gameBoard.appendChild(menuScreen);
  cardTable.innerHTML = "";
  cardTable.remove();
  cardRoom.remove();
}

const card = (level) => {
  const getCard = document.createElement("div");
  const flipCardInner = document.createElement("div");
  const flipCardFront = document.createElement("div");
  const flipCardBack = document.createElement("div");
  const imgValue = document.createElement("img");
  const imgFront = document.createElement("img");
  getCard.classList.add("card");
  flipCardInner.classList.add("flip-card-inner");
  flipCardFront.classList.add("flip-card-front");
  flipCardBack.classList.add("flip-card-back");
  imgValue.setAttribute("src", "../img/Gameover.png");
  imgFront.setAttribute("src", "../img/Card1.png");
  cardRoom.appendChild(getCard);
  getCard.appendChild(flipCardInner);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCardFront.appendChild(imgFront);
  flipCardBack.appendChild(imgValue);
  flipCardInner.addEventListener("click", () => {
    flipCardInner.classList.add("transform");
    const allCards = document.querySelectorAll(".flip-card-inner");
    console.log(allCards);
    allCards.forEach((levelButton) => levelButton.addEventListener("click", toStart));  
  });
}

const chooseLevel = (elem) => {
  allButtons.forEach((levelButton) => levelButton.classList.remove("checked"));
  elem.target.classList.add("checked");
}

allButtons.forEach((levelButton) => levelButton.addEventListener("click", chooseLevel));


function startGame () {
  let currentLevel = document.querySelector(".checked").getAttribute("id");
  menuScreen.remove();
  gameBoard.appendChild(cardRoom);
  function createTable (level) {
    cardRoom.classList.add("game-cards")
    switch (level) {
      case "easy":
        cardRoom.classList.add("game-cards");
        for(let i = 3; i-- ;) {
          card(currentLevel);
        }
        break;
      case "medium":
        cardRoom.classList.add("game-cards");
        for(let i = 6; i-- ;) {
          card(currentLevel);
        }
        break;
      case "hard":
        cardRoom.classList.add("game-cards");
        for(let i = 10; i-- ;) {
          card(currentLevel);
        }
        break;
  }
}
createTable(currentLevel);
}


startButton.addEventListener("click", startGame);
