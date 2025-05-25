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

const click = (value) => input.value += value

const press = (event) => {
    if (!(event.key === "Enter")) {
        event.preventDefault();
    }
    keys.forEach((key) => {
        if (event.key === key && !(event.key === "Enter")) {
            input.value += event.key;
        }
    });
}

const clearField = () => {
    if (input.value.length > 1) {
        input.value = input.value.slice(0, -1);
    } else {
        input.value = "";
    }
}

const solve = () => {
    let result = math.evaluate(input.value);
    if (result === undefined) {
        return alert('Please input some numbers')
    }
    input.value = result;
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "Backspace":
            clearBtn.classList.add("keyPressed");
            clearField();
            break;
        case "Enter":
            event.preventDefault();
            resultBtn.classList.add("keyPressed");
            solve();
            break;
        default:
            if (keys.includes(event.key)) {
                const pressedButton = document.querySelector(
                    `.btn[value="${event.key}"]`
                );
                if (pressedButton) {
                    pressedButton.classList.add("keyPressed");
                }
            }
            break;
    }
    press(event);
});

document.addEventListener("keyup", () => {
    clearBtn.classList.remove("keyPressed");
    resultBtn.classList.remove("keyPressed");
    buttons.forEach((button) => {
        button.classList.remove("keyPressed");
    });
});

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        click(event.target.value);
    });
});

clearBtn.addEventListener("click", () => {
    clearField();
});

resultBtn.addEventListener("click", () => {
    solve();
});
