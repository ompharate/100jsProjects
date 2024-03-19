let button = document.getElementById("btn");
let dice = document.getElementById("dice");
let history = document.getElementById("history");

let historyList = [];

const rollDice = () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const diceFace = getDiceFace(randomNumber);

  dice.innerHTML = diceFace;
  historyList.push(randomNumber);
  updateHistory();
};


const updateHistory = () =>{
    history.innerHTML = ''
   for(let i = 0;i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span>`;
    history.appendChild(listItem);
   }
}

const getDiceFace = (number) => {
  switch (number) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

button.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
