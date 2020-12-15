const difficulty = document.getElementsByClassName("difficulty");
const easyLevelButton = document.getElementById("easy");
const mediumLevelButton = document.getElementById("medium");
const hardLevelButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const allButtons = document.querySelectorAll(".difficulty__level");
const cardRoom = document.createElement("div");
cardRoom.classList.add("card-room");
const cardTable = document.createElement("div");
cardTable.classList.add("card-table");

const chooseLevel = (elem) => {
  allButtons.forEach((level) => level.classList.remove("checked"));
  elem.target.classList.add("checked");
}

allButtons.forEach((level) => level.addEventListener("click", chooseLevel));