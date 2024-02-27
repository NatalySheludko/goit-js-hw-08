const boxBtn = document.querySelector("#controls");
boxBtn.style.backgroundColor = "#f6f6fe";
boxBtn.style.padding = "32px";
boxBtn.style.width = "486px";
boxBtn.style.borderRadius = "8px";
boxBtn.style.display = "flex";
boxBtn.style.columnGap = "16px";
boxBtn.style.marginBottom = "16px";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userNumber = document.querySelector("input");

userNumber.style.border = "1px solid #808080";
userNumber.style.borderRadius = "8px";
userNumber.style.padding = "8px 72px";
userNumber.style.width = "150px";
userNumber.style.paddingRight = "20px";

userNumber.addEventListener("input", handleInput);

const container = document.querySelector("#boxes");
container.style.backgroundColor = "#f6f6fe";
container.style.display = "flex";
container.style.columnGap = "16px";
container.style.padding = "32px";

let elements = 0;

function handleInput(event) {
  elements = event.currentTarget.value;
}

function createBoxes(amount) {
  container.innerHTML = "";

  let squareSize = 30;

  for (let box = 0; box < amount; box += 1) {
    const square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = getRandomHexColor();

    squareSize += 10;

    container.append(square);
  }
}

const createCollection = document.querySelector("button[data-create]");
createCollection.style.border = "none";
createCollection.style.borderRadius = "8px";
createCollection.style.padding = "8px 72px";
createCollection.style.width = "150px";
createCollection.style.color = "#fff";
createCollection.style.display = "flex";
createCollection.style.justifyContent = "center";
createCollection.style.fontWeight = "500";
createCollection.style.fontSize = "16px";
createCollection.style.lineHeight = "1.5";
createCollection.style.letterSpacing = "0.04em";
createCollection.style.backgroundColor = "#4e75ff";

createCollection.addEventListener("click", handleClickCreate);
createCollection.addEventListener("mouseover", handleHover);
createCollection.addEventListener("mouseout", handleHoverOut);

function handleClickCreate() {
  if (elements < 1 || elements > 100) {
  } else {
    createBoxes(elements);

    userNumber.value = "";
  }
}

function handleHover() {
  createCollection.style.backgroundColor = "#6c8cff";
}

function handleHoverOut() {
  createCollection.style.backgroundColor = "#4e75ff";
}

const destroyCollection = document.querySelector("button[data-destroy]");
destroyCollection.style.border = "none";
destroyCollection.style.borderRadius = "8px";
destroyCollection.style.padding = "8px 72px";
destroyCollection.style.width = "150px";
destroyCollection.style.backgroundColor = "#ff4e4e";

destroyCollection.style.color = "#fff";
destroyCollection.style.display = "flex";
destroyCollection.style.justifyContent = "center";
destroyCollection.style.fontWeight = "500";
destroyCollection.style.fontSize = "16px";
destroyCollection.style.lineHeight = "1.5";
destroyCollection.style.letterSpacing = "0.04em";

destroyCollection.addEventListener("click", destroyBoxes);
destroyCollection.addEventListener("mouseover", destroyHandleHover);
destroyCollection.addEventListener("mouseout", destroyHandleHoverOut);

function destroyHandleHover() {
  destroyCollection.style.backgroundColor = "#ff7070";
}

function destroyHandleHoverOut() {
  destroyCollection.style.backgroundColor = "#ff4e4e";
}

function destroyBoxes() {
  container.innerHTML = "";
  userNumber.value = "";
}
