const body = document.querySelector("body");
body.style.fontFamily = "'Montserrat', sans-serif";
body.style.letterSpacing = "0.04em";

const userName = document.querySelector("#name-input");
userName.style.width = "360px";
userName.style.padding = "13px 16px";
userName.style.fontWeight = "400";
userName.style.fontSize = "16px";
userName.style.lineHeight = "1.5";

const userNameOutput = document.querySelector("#name-output");
const styleNameOutput = document.querySelector("h1");
styleNameOutput.style.fontWeight = "600";
styleNameOutput.style.fontSize = "24px";
styleNameOutput.style.lineHeight = "1.33";

userName.addEventListener("input", handleInput);

function handleInput(event) {
  const name = event.currentTarget.value.trim();

  return name === ""
    ? (userNameOutput.textContent = "Anonymous")
    : (userNameOutput.textContent = name);
}
