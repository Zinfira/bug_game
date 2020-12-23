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

function toStart() {
  gameBoard.appendChild(menuScreen);
  cardTable.innerHTML = "";
  cardTable.remove();
  cardRoom.remove();
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const chooseLevel = (elem) => {
  allButtons.forEach((level) => level.classList.remove("checked"));
  elem.target.classList.add("checked");
};

allButtons.forEach((level) => level.addEventListener("click", chooseLevel));

function startGame() {
  let currentLevel = document.querySelector(".checked").getAttribute("id");
  function createdTableLevel(level) {
    cardRoom.classList.add("game-cards");
    switch (level) {
      case "easy":
        return 3;
      case "medium":
        return 6;
      case "hard":
        return 10;
    }
    return;
  }

  let newCreatedGame = createdTableLevel(currentLevel);
  menuScreen.remove();
  cardTable.classList.remove("cardsForEasy", "cardsForMedium", "cardsForHard");
  gameBoard.appendChild(cardRoom);
  cardRoom.appendChild(cardTable);

  let card = () => {
    function createCards() {
      const getCard = document.createElement("div");
      const flipCardInner = document.createElement("div");
      const flipCardFront = document.createElement("div");
      const flipCardBack = document.createElement("div");
      const imgValue = document.createElement("img");
      const imgFront = document.createElement("img");
      getCard.classList.add("card");
      flipCardInner.classList.add("flip-card-inner", "hover-cards");
      flipCardFront.classList.add("flip-card-front");
      flipCardBack.classList.add("flip-card-back");
      imgValue.setAttribute("src", "img/Gameover.png");
      imgFront.setAttribute("src", "img/Card1.png")
      cardTable.appendChild(getCard);
      getCard.appendChild(flipCardInner);
      flipCardInner.appendChild(flipCardFront);
      flipCardInner.appendChild(flipCardBack);
      flipCardFront.appendChild(imgFront);
      flipCardBack.appendChild(imgValue);
      
      return {
        createGameCards: getCard,
        flipCardInnerName: flipCardInner,
        flipCardFrontName: flipCardFront,
        flipCardBackName: flipCardBack,
        imgValueName: imgValue,
        imgFrontName: imgFront,
      };
    }

    let createdCards = createCards();

    function getBugCard(levelButton) {
      let randomBug = getRandom(1, levelButton);
      if (randomBug == 1) {
        createdCards.imgValueName.setAttribute("src", "img/BugCard.png");
      }
    }

    createdCards.flipCardInnerName.addEventListener("click", () => {
      getBugCard(newCreatedGame);
      createdCards.flipCardInnerName.classList.remove("hover-cards");
      createdCards.flipCardInnerName.classList.add("transform");
      const allCards = document.querySelectorAll(".flip-card-inner");
      allCards.forEach((levelButton) =>
        levelButton.addEventListener("click", toStart)
      );
    });
  };

  function createTable(levelButton) {
    switch (levelButton) {
      case "easy":
        cardTable.classList.add("cardsForEasy");
        for (let i = 3; i--; ) {
          card(currentLevel);
        }
        break;
      case "medium":
        cardTable.classList.add("cardsForMedium");
        for (let i = 6; i--; ) {
          card(currentLevel);
        }
        break;
      case "hard":
        cardTable.classList.add("cardsForHard");
        for (let i = 10; i--; ) {
          card(currentLevel);
        }
        break;
    }
  }
  createTable(currentLevel);
}

startButton.addEventListener("click", startGame);