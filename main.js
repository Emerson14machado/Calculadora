const display = document.querySelector("#display"); // Puxa o documento do html.
const buttons = document.querySelectorAll("button") // Pega a lista de elementos do html.

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id;
        }

    })
})