const keys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "*",
  "/",
];

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      document.getElementById("btn-clear").classList.add("keyPressed");
      clearField();
    } else if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn-equal").classList.add("keyPressed");
      solve();
    } else if (keys.includes(event.key)) {
      const pressedButton = document.querySelector(
        `.btn[value="${event.key}"]`
      );
      if (pressedButton) {
        pressedButton.classList.add("keyPressed");
      }
    }
    press(event);
  });

  document.addEventListener("keyup", function () {
    document.getElementById("btn-clear").classList.remove("keyPressed");
    document.getElementById("btn-equal").classList.remove("keyPressed");
    document.querySelectorAll(".btn").forEach(function (button) {
      button.classList.remove("keyPressed");
    });
  });

  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      click(event.target.value);
    });
  });

  document.getElementById("btn-clear").addEventListener("click", function () {
    clearField();
  });

  document.getElementById("btn-equal").addEventListener("click", function () {
    solve();
  });
});

function click(value) {
  document.getElementById("text-input-field").value += value;
}

function press(event) {
  const isEnterKey = event.key === "Enter";
  keys.forEach((key) => {
    if (event.key === key && !isEnterKey) {
      document.getElementById("text-input-field").value += event.key;
    }
  });

  if (!isEnterKey) {
    event.preventDefault();
  }
}

function clearField() {
  let input = document.getElementById("text-input-field");
  let inputValue = input.value;
  if (inputValue.length > 1) {
    input.value = inputValue.slice(0, -1);
  } else {
    input.value = "";
  }
}

function solve() {
  let inputValue = document.getElementById("text-input-field").value;
  let result = math.evaluate(inputValue);
  document.getElementById("text-input-field").value = result;
}
