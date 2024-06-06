const buttons = document.querySelectorAll(".btn");
const resultBtn = document.getElementById("btn-equal")
const clearBtn = document.getElementById("btn-clear")
const input = document.getElementById("text-input-field")

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

const click = (value) => {
  input.value += value;
}

const press = (event) => {
  const isEnterKey = event.key === "Enter";
  keys.forEach((key) => {
    if (event.key === key && !isEnterKey) {
      input.value += event.key;
    }
  });

  if (!isEnterKey) {
    event.preventDefault();
  }
}

const clearField = () => {
  let inputValue = input.value;
  if (input.value.length > 1) {
    input.value = inputValue.slice(0, -1);
  } else {
    input.value = "";
  }
}

const solve = () => {
  let inputValue = input.value;
  let result = math.evaluate(inputValue);
  if (result === undefined){
    return alert('Please input some numbers')
  }
  input.value = result;
}

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      clearBtn.classList.add("keyPressed");
      clearField();
    } else if (event.key === "Enter") {
      event.preventDefault();
      resultBtn.classList.add("keyPressed");
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
    clearBtn.classList.remove("keyPressed");
    resultBtn.classList.remove("keyPressed");
    buttons.forEach(function (button) {
      button.classList.remove("keyPressed");
    });
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      click(event.target.value);
    });
  });

  clearBtn.addEventListener("click", function () {
    clearField();
  });

  resultBtn.addEventListener("click", function () {
    solve();
  });
