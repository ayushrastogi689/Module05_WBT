//

let resultField = document.querySelector(".resultField");

function add() {
  let firstNumber = parseInt(document.querySelector("#firstNumber").value);
  let secondNumber = parseInt(document.querySelector("#secondNumber").value);

  let resultValue = firstNumber + secondNumber;

  resultField.setAttribute("type", "number");
  resultField.value = resultValue;
}
