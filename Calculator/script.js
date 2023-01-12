const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", (event) => {
    let buttonId = event.target.id;

    if (buttonId == "clear") {
      display.innerText = "";
    } else if (buttonId == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && buttonId == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && buttonId == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += buttonId;
    }
  });
}