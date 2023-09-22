const etelaatBazi = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let bazikonShomarehId = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const bazikonha = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const virayeshBazikonAval = document.getElementById("virayesh-1");
const virayeshBazikonDovom = document.getElementById("virayesh-2");

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("modal-style");

const enserafBtnElement = document.getElementById("enseraf-btn");

const formElement = document.querySelector("form");
const errorJayKhali = document.getElementById("error-jaykhali");

const shoroBaziBtnElement = document.getElementById("shoro-bazi-btn");
const safheBAziElement = document.getElementById("bazi-kardan");
const esmEshtebahError = document.getElementById("esm-eshtebah");

// const gameFieldElements = document.querySelectorAll("#safhe-bazi li");
const gameBoardElement = document.getElementById("safhe-bazi");
 const esmBazikonNobat = document.getElementById("esm-bazikon-nobat");

const bakhtiElement = document.getElementById("bakhti");

virayeshBazikonAval.addEventListener("click", bazkardanOverlays);
virayeshBazikonDovom.addEventListener("click", bazkardanOverlays);

enserafBtnElement.addEventListener("click", bastanOverlays);
// backdropElement.addEventListener("click", bastanOverlays);

formElement.addEventListener("submit", avazkardanEsmBazikon);

shoroBaziBtnElement.addEventListener("click", shoroBazi);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);