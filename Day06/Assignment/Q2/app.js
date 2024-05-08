// var selectedRow = null; // Corrected variable name

// // Show Alerts.
// function showAlert(message, className) {
//   const divElement = document.createElement("div");
//   divElement.className = `alert alert-${className}`;

//   divElement.appendChild(document.createTextNode(message));
//   const container = document.querySelector(".container");

//   const main = document.querySelector(".main");
//   container.insertBefore(divElement, main); // Corrected variable name

//   setTimeout(() => {
//     document.querySelector(".alert").remove();
//   }, 3000);
// }

// // Delete Data
// document.querySelector("#student-list").addEventListener("click", (e) => {
//   e.preventDefault();
//   const target = e.target;

//   if (target.classList.contains("btn-danger")) {
//     // Corrected class name
//     target.parentElement.parentElement.remove();
//     showAlert("Student data deleted", "danger");
//   }
// });

// // Edit data
// document.querySelector("#student-list").addEventListener("click", (e) => {
//   // Added "#" before "student-list"
//   target = e.target;

//   if (target.classList.contains("edit")) {
//     selectedRow = target.parentElement.parentElement;

//     document.querySelector("#firstName").value =
//       selectedRow.children[0].textContent;
//     document.querySelector("#lastName").value =
//       selectedRow.children[1].textContent;
//     document.querySelector("#email").value =
//       selectedRow.children[2].textContent;
//     document.querySelector("#mobile").value =
//       selectedRow.children[3].textContent;
//     document.querySelector("#city").value = selectedRow.children[4].textContent;
//   }
// });

// // Clear all fields
// function clearAllFields() {
//   const firstName = document.querySelector("#firstName").value;
//   const lastName = document.querySelector("#lastName").value;
//   const email = document.querySelector("#email").value;
//   const mobile = document.querySelector("#mobile").value;
//   const city = document.querySelector("#city").value;

//   if (
//     firstName == "" ||
//     lastName == "" ||
//     email == "" ||
//     mobile == "" ||
//     city == ""
//   ) {
//     showAlert("Please fill the values in all fields", "danger");
//   } else {
//     const list = document.querySelector("#student-list");
//     const row = document.createElement("tr"); // Create a new row element

//     row.innerHTML = `
//       <td>${firstName} </td>
//       <td>${lastName} </td>
//       <td>${email} </td>
//       <td>${mobile} </td>
//       <td>${city} </td>
//       <td>
//         <a href="#" class="btn btn-warning btn-sm edit" > Edit </a>
//         <a href="#" class="btn btn-danger btn-sm btn-delete" > Delete </a> <!-- Corrected class name -->
//       </td>
//     `;
//     list.appendChild(row);
//     showAlert("User Added", "success");
//   }

//   // Clear the input fields after adding data
//   document.querySelector("#firstName").value = "";
//   document.querySelector("#lastName").value = "";
//   document.querySelector("#email").value = "";
//   document.querySelector("#mobile").value = "";
//   document.querySelector("#city").value = "";
// }

// // Add event listener for form submission
// document.querySelector("#user_form").addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent form submission

//   // Call the clearAllFields() function to add the new data
//   clearAllFields();
// });

var selectedRow = null;

// Show Alerts.
function showAlert(message, className) {
  const divElement = document.createElement("div");
  divElement.className = `alert alert-${className}`;

  divElement.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");

  const main = document.querySelector(".main");
  container.insertBefore(divElement, main);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}

// Delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains("btn-danger")) {
    target.parentElement.parentElement.remove();
    showAlert("Student data deleted", "danger");
  }
});

// Edit data
document.querySelector("#student-list").addEventListener("click", (e) => {
  e.preventDefault();
  target = e.target;

  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;

    document.querySelector("#firstName").value =
      selectedRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selectedRow.children[1].textContent;
    document.querySelector("#email").value =
      selectedRow.children[2].textContent;
    document.querySelector("#mobile").value =
      selectedRow.children[3].textContent;
    document.querySelector("#city").value = selectedRow.children[4].textContent;
  }
});

// Clear all fields
function clearAllFields() {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const city = document.querySelector("#city").value;

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    mobile == "" ||
    city == ""
  ) {
    showAlert("Please fill the values in all fields", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr"); // Create a new row element

      row.innerHTML = `
      <td>${firstName} </td>
      <td>${lastName} </td>
      <td>${email} </td>
      <td>${mobile} </td>
      <td>${city} </td>
      <td>
        <a href="#" class="btn btn-warning btn-sm edit" > Edit </a>
        <a href="#" class="btn btn-danger btn-sm btn-delete" > Delete </a>
      </td>
    `;
      list.appendChild(row);
      showAlert("User Added", "success");
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = email;
      selectedRow.children[3].textContent = mobile;
      selectedRow.children[4].textContent = city;

      showAlert("Student info edited", "info");
      selectedRow = null;
    }
  }

  // Clear the input fields after adding data or editing existing data
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mobile").value = "";
  document.querySelector("#city").value = "";
}

// Add event listener for form submission
document.querySelector("#user_form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Call the clearAllFields() function to add the new data or edit existing data
  clearAllFields();
});
