let firstNumber;
let operator;
let secondOperator;

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
