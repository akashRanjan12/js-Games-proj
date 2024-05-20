function getmove() {
  var compMove = "";
  if (Math.random() <= 1 / 3) {
    compMove = "rock";
  } else if (Math.random() <= 2 / 3) {
    compMove = "paper";
  } else if (Math.random() <= 1) {
    compMove = "scissor";
  }
  return compMove;
}

const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};
function checkmove(move) {
  var getcompmove = getmove();
  let result = "";

  if (move === "rock") {
    if (getcompmove === "scissor") {
      result = "you Win";
    } else if (getcompmove === "paper") {
      result = "you Lose";
    } else if (getcompmove === "rock") {
      result = "Tie here";
    }
  } else if (move == "paper") {
    if (getcompmove === "rock") {
      result = "you Win";
    } else if (getcompmove === "scissor") {
      result = "you Lose";
    } else if (getcompmove === "paper") {
      result = "Tie here";
    }
  } else if (move === "scissor") {
    if (getcompmove === "rock") {
      result = "you Lose";
    } else if (getcompmove === "paper") {
      result = "you Win";
    } else if (getcompmove === "scissor") {
      result = "Tie here";
    }
  }

  if (result === "you Win") {
    score.wins += 1;
  } else if (result === "you Lose") {
    score.losses += 1;
  } else if (result === "Tie here") {
    score.ties += 1;
  }

  var storeRes = document.querySelector("#store-res");
  storeRes.innerHTML = `You get ${getcompmove}: ${result}`;
  var winEl = document.querySelector("#win-score");
  winEl.innerHTML = score.wins;
  var losetEl = document.querySelector("#losses-score");
  losetEl.innerHTML = score.losses;
  var tieEl = document.querySelector("#ties-score");
  tieEl.innerHTML = score.ties;
}
function reset() {
  var winEl = document.querySelector("#win-score");
  winEl.innerHTML = "0";
  var losetEl = document.querySelector("#losses-score");
  losetEl.innerHTML = "0";
  var tieEl = document.querySelector("#ties-score");
  tieEl.innerHTML = "0";
}
