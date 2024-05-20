let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true; //playerX, playerO
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("clicked");
    console.log(count);
    if (turn === true) {
      box.innerText = "O";
      box.classList.add("color");
      box.classList.remove("color1");
      turn = false;
    } else {
      box.innerText = "X";
      box.classList.remove("color");
      box.classList.add("color1");
      turn = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const showwinner = (winner) => {
  msg.innerText = `The winner is ${winner}. Congratulations!`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const disabledboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const checkwinner = () => {
  for (i of winpattern) {
    // console.log(
    //   boxes[i[0]].innerText,
    //   boxes[i[1]].innerText,
    //   boxes[i[2]].innerText
    // );
    let pos1val = boxes[i[0]].innerText;
    let pos2val = boxes[i[1]].innerText;
    let pos3val = boxes[i[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
};

const enabledboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const reset = () => {
  turn = true;
  enabledboxes();
  msgcontainer.classList.add("hide");
};
newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
