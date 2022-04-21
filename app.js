const bugList = document.querySelector(".buglist");
const template = document.querySelector("#bug");
const bugsAmount = 8;
let bugsArray;

renderBugs();
bugsArray = Array.from(document.querySelectorAll(".bug"));
turnOnRandomBug();

function renderBugs() {
  for (let i = 0; i < bugsAmount; i++) {
    const bug = template.content.cloneNode(true);
    bug.querySelector(".switcher__container").addEventListener("click", (e) => {
      switchBug(e.target.closest(".bug"));
    });
    bugList.append(bug);
  }
}

function turnOnRandomBug() {
  turnOnBug(bugsArray[getRandomNumber(bugsAmount)]);
}

function switchBug(bug) {
  if (isActive(bug)) {
    setChaos(bugsArray);
    turnOffBug(bug);
    if(!bugsArray.some(bug => isActive(bug))) {
      turnOnRandomBug();
    }
  } else {
    turnOnBug(bug);
  }
}

function isActive(bug) {
  return bug
    .querySelector(".switcher__container")
    .classList.contains("switcher__container_active");
}

function turnOnBug(bug) {
  bug
    .querySelector(".switcher__container")
    .classList.add("switcher__container_active");
}

function turnOffBug(bug) {
  bug
    .querySelector(".switcher__container")
    .classList.remove("switcher__container_active");
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function setChaos(arr) {
  arr.forEach((bug) => {
    if (getRandomNumber(2)) {
      if (getRandomNumber(2))
        turnOnBug(bug);
      else
        turnOffBug(bug);
    }
  });
}
