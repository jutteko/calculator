let firstNumber;
let operator;
let secondNumber;

function operate(o, a, b) {
  switch (o) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "not a valuable operator";
  }
}

const cijferKnoppen = document.querySelectorAll(".cijfer");

cijferKnoppen.forEach((knop) => {
  knop.addEventListener("click", (e) => {
    console.log(`Je hebt op ${e.target.textContent} geklikt`);
  });
});
