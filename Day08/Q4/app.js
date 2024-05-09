let sortedListDisplayed = false; // Variable to track if sorted list has been displayed

function bubbleSort() {
  const numbersInput = document.getElementById("numbersInput").value;
  const originalList = document.getElementById("originalList");
  const sortedList = document.getElementById("sortedList");

  // Clear sorted list and reset flag
  sortedList.textContent = "";

  // Check if input is empty
  if (numbersInput.trim() === "") {
    originalList.textContent = "Invalid input. Please enter numbers.";
    originalList.classList.add("error"); // Add error class
    return;
  } else {
    originalList.classList.remove("error"); // Remove error class if input is not empty
  }

  // Convert input string to array of numbers
  const numbersArray = numbersInput.split(",").map(Number);

  // Display original list
  originalList.textContent = `Original List: ${numbersArray.join(", ")}`;

  // Bubble Sort algorithm
  for (let i = 0; i < numbersArray.length - 1; i++) {
    for (let j = 0; j < numbersArray.length - i - 1; j++) {
      if (numbersArray[j] > numbersArray[j + 1]) {
        // Swap elements
        let temp = numbersArray[j];
        numbersArray[j] = numbersArray[j + 1];
        numbersArray[j + 1] = temp;
      }
    }
  }

  // Display sorted list only if it has not been displayed before
  sortedListDisplayed = false;

  if (!sortedListDisplayed) {
    sortedList.textContent = `Sorted List: ${numbersArray.join(", ")}`;
    sortedListDisplayed = true; // Update sortedListDisplayed
  }
}
