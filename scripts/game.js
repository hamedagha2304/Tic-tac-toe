function resetBazi() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  bakhtiElement.firstElementChild.innerHTML =
    'باریکلا <span id="esm-karbar-barandeh">نام بازیکن</span>، تو برنده شدی';
  bakhtiElement.style.display = "none";
  esmBazikonNobat.parentElement.style.display = "block";

  let gameBoardIndex = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      etelaatBazi[i][j] = 0;

      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function shoroBazi() {
  if (bazikonha[0].name === "" || bazikonha[1].name === "") {
    esmEshtebahError.textContent = "لطفا ابتدا نام خود را انتخاب کنید";
    return;
  }

  resetBazi();

  esmBazikonNobat.textContent = bazikonha[activePlayer].name;
  safheBAziElement.style.display = "block";
  esmEshtebahError.textContent = "";
}

function avazKardanNobat() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  // esmBazikonNobat.textContent = bazikonha[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }
  const sotonEntekhabShode = +event.target.dataset.col;
  const radifEntekhabShode = +event.target.dataset.row;

  if (etelaatBazi[radifEntekhabShode - 1][sotonEntekhabShode - 1] > 0) {
    return;
  }

  event.target.textContent = bazikonha[activePlayer].symbol;
  event.target.classList.add("disabled");

  etelaatBazi[radifEntekhabShode - 1][sotonEntekhabShode - 1] =
    activePlayer + 1;
  console.log(etelaatBazi);

  const barandeBazi = shnakhtanBarande();
  currentRound++;

  if (barandeBazi !== 0) {
    payanBazi(barandeBazi);
  }

  avazKardanNobat();
  esmBazikonNobat.textContent = bazikonha[activePlayer].name;
}

function shnakhtanBarande() {
  for (let i = 0; i < 3; i++) {
    if (
      etelaatBazi[i][0] > 0 &&
      etelaatBazi[i][0] === etelaatBazi[i][1] &&
      etelaatBazi[i][1] === etelaatBazi[i][2]
    ) {
      return etelaatBazi[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      etelaatBazi[0][i] > 0 &&
      etelaatBazi[0][i] === etelaatBazi[1][i] &&
      etelaatBazi[0][i] === etelaatBazi[2][i]
    ) {
      return etelaatBazi[0][i];
    }
  }

  if (
    etelaatBazi[0][0] > 0 &&
    etelaatBazi[0][0] === etelaatBazi[1][1] &&
    etelaatBazi[1][1] === etelaatBazi[2][2]
  ) {
    return etelaatBazi[0][0];
  }

  if (
    etelaatBazi[2][0] > 0 &&
    etelaatBazi[2][0] === etelaatBazi[1][1] &&
    etelaatBazi[1][1] === etelaatBazi[0][2]
  ) {
    return etelaatBazi[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function payanBazi(barandeBazi) {
  gameIsOver = true;
  bakhtiElement.style.display = "block";

  if (barandeBazi > 0) {
    const esmBarande = bazikonha[barandeBazi - 1].name;
    bakhtiElement.firstElementChild.firstElementChild.textContent = esmBarande;
    esmBazikonNobat.parentElement.style.display = "none";
  } else {
    bakhtiElement.firstElementChild.textContent = "!بازی مساوی شد";
    esmBazikonNobat.parentElement.style.display = "none";
  }
}
