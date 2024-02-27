const formInputLogin = document.querySelector(".login-form");

for (let item = 0; item < formInputLogin.length; item += 1) {
  formInputLogin[item].style.fontFamily = "'Montserrat', sans-serif";
  formInputLogin[item].style.display = "flex";
  formInputLogin[item].style.flexDirection = "column";
  formInputLogin[item].style.fontWeight = "500";
  formInputLogin[item].style.fontSize = "16px";
  formInputLogin[item].style.lineHeight = "1.5";
  formInputLogin[item].style.letterSpacing = "0.04em";
}

const formInput = document.querySelectorAll("input");
for (let item = 0; item < formInput.length; item += 1) {
  formInput[item].style.width = "408px";
  formInput[item].style.height = "40px";
  formInput[item].style.borderRadius = "4px";
  formInput[item].style.marginBottom = "8px";
  formInput[item].style.marginTop = "8px";
}

const textLabel = document.querySelectorAll("label");
for (let item = 0; item < textLabel.length; item += 1) {
  textLabel[item].style.fontWeight = "400";
  textLabel[item].style.fontSize = "16px";
  textLabel[item].style.lineHeight = "1.5";
  textLabel[item].style.letterSpacing = "0.04em";
}

const btn = document.querySelector("button");
btn.addEventListener("mouseover", handleHover);
btn.addEventListener("mouseout", handleHoverOut);

btn.style.backgroundColor = "#4e75ff";
btn.style.borderRadius = "8px";
btn.style.padding = "8px 16px";
btn.style.width = "86px";
btn.style.display = "flex";
btn.style.alignItems = "center";
btn.style.color = "white";
btn.style.border = "none";
btn.style.marginTop = "16px";

function handleHover() {
  btn.style.backgroundColor = "#6C8CFF";
}

function handleHoverOut() {
  btn.style.backgroundColor = "#4e75ff";
}

formInputLogin.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputElements = event.currentTarget.elements;

  const userEmail = inputElements.email.value.trim();
  const userPassword = inputElements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const formInfo = {
      email: `${userEmail}`,
      password: `${userPassword}`,
    };

    console.log(formInfo);

    event.currentTarget.reset();
  }
}
