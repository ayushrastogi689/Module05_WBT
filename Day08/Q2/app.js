function convertToBinary() {
  const decimalInput = parseInt(
    document.getElementById("decimalInput").value.trim()
  );

  const binaryResult = document.getElementById("binaryResult");

  // Check if input is empty
  if (decimalInput === "") {
    binaryResult.textContent = "Please enter a decimal number.";
    return;
  }

  const decimalValue = Number(decimalInput);
  if (isNaN(decimalValue)) {
    binaryResult.textContent =
      "Invalid input. Please enter a valid decimal number.";

    binaryResult.classList.add("error");
    return;
  }

  // Convert decimal to binary
  const binaryValue = Number(decimalInput).toString(2);

  binaryResult.textContent = `Binary Number is: ${binaryValue}`;
}
