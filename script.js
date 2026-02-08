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

let display = document.querySelector(".digits");
const cijferKnoppen = document.querySelectorAll(".cijfer");
const operatorKnoppen = document.querySelectorAll(".bewerken");
const isgelijkaanKnop = document.querySelector("#isGelijkAan");
const clear = document.querySelector(".ce");

//evenlistener aan de cijferknoppen hangen
cijferKnoppen.forEach((knop) => {
  knop.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  });
});

// eventlistener aan de operatorknoppen hangen
operatorKnoppen.forEach((knop) => {
  knop.addEventListener("click", (e) => {
    firstNumber = display.textContent;
    operator = e.target.textContent;
    display.textContent = "";
  });
});

// eventlistener aan de isgelijkaanKnop hangen
isgelijkaanKnop.addEventListener("click", (e) => {
  secondNumber = display.textContent;
  display.textContent = operate(
    operator,
    parseFloat(firstNumber),
    parseFloat(secondNumber),
  );
});

// eventlistener aan de CE-knop
CDATASection.addEventListener("click", (e) => {
  display.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
});
