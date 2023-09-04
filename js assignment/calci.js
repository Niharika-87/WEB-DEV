let string = " ";
let buttons = document.querySelectorAll(".calc-button, .twice, .thrice");

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const screen = document.querySelector('.screen');

    if (e.target.innerHTML === "=") {
      string = eval(string);
      screen.value = string;

    } else if (e.target.innerHTML === "C") {
      string = "";
      screen.value = string;
    } else if (e.target.innerHTML === "←") {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else {
      string = string + e.target.innerHTML;
      screen.value = string;
    }
  })
});
