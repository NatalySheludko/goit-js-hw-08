function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = document.querySelector("body");
changeBgColor.style.fontFamily = "'Montserrat', sans-serif";
changeBgColor.style.fontWeight = "400";
changeBgColor.style.fontSize = "16px";
changeBgColor.style.lineHeight = "1.5";
changeBgColor.style.letterSpacing = "0.04em";

const getColorValue = document.querySelector(".color");

const clickBtn = document.querySelector(".change-color");

clickBtn.style.fontWeight = "500";
clickBtn.style.fontSize = "16px";
clickBtn.style.lineHeight = "1.5";
clickBtn.style.letterSpacing = "0.04em";
clickBtn.style.color = "#fff";
clickBtn.style.backgroundColor = "#4e75ff";
clickBtn.style.borderRadius = "8px";
clickBtn.style.border = "none";
clickBtn.style.padding = "8px 16px";
clickBtn.style.width = "148px";
clickBtn.style.display = "flex";
clickBtn.style.justifyContent = "center";

clickBtn.addEventListener("click", handleClick);

function handleClick() {
  const randomColor =
		getRandomHexColor(); 
	
  changeBgColor.style.backgroundColor = randomColor; я
  getColorValue.textContent = randomColor; 
}
