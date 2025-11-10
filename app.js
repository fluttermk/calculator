const outputbar = document.querySelector(".result-bar");
const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach((btn) => btn.addEventListener("click", calculatormanger));

function calculatormanger() {
  let result = this.value;
  if (result !== "AC" && result !== "&" && result !== "=") {
    outputbar.value = outputbar.value + result;
  }
  if (result == "=") {
    outputbar.value = eval(outputbar.value);
  }

  if (result == "AC") {
    outputbar.value = "";
  }

  if (result == "&") {
    let length = outputbar.value;
    outputbar.value = length.slice(0, -1);
  }
}

