let resultField = document.querySelector("#finalResult input");

function add() {
  let firstNumber = parseInt(document.querySelector("#firstNumber").value);
  let secondNumber = parseInt(document.querySelector("#secondNumber").value);

  let resultValue = firstNumber + secondNumber;

  resultField.setAttribute("type", "number");
  resultField.value = resultValue;
}

function subtract() {
  let firstNumber = parseInt(document.querySelector("#firstNumber").value);
  let secondNumber = parseInt(document.querySelector("#secondNumber").value);

  let resultValue = firstNumber - secondNumber;

  resultField.setAttribute("type", "number");
  resultField.value = resultValue;
}

function multiply() {
  let firstNumber = parseInt(document.querySelector("#firstNumber").value);
  let secondNumber = parseInt(document.querySelector("#secondNumber").value);

  let resultValue = firstNumber * secondNumber;

  resultField.setAttribute("type", "number");
  resultField.value = resultValue;
}

function divide() {
  let firstNumber = parseInt(document.querySelector("#firstNumber").value);
  let secondNumber = parseInt(document.querySelector("#secondNumber").value);

  let resultValue = firstNumber / secondNumber;

  resultField.setAttribute("type", "number");
  resultField.value = resultValue;
}
