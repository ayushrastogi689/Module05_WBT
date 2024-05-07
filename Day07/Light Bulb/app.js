const bulbDiv = document.querySelector(".bulb");

const button = document.querySelector("button");

let getStatus = false;

button.addEventListener("click", function () {
  if (getStatus == false) {
    bulbDiv.style.backgroundColor = "yellow";
    console.log("Button ON");
    getStatus = true;
  } else {
    bulbDiv.style.backgroundColor = "transparent";
    console.log("Button OFF");
    getStatus = false;
  }
});
