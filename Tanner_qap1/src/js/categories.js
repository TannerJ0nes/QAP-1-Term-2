/**
 * categories.js
 *
 * The store's categories are defined in an Array of category Objects. Each
 * category Object has the following properties:
 *
 *  - id: String, a unique category id (e.g., "c1", "c2", "c3")
 *  - description: String, the human-readable name for the category (e.g., "Perfume")
 */

// categories.js

// Define your categories
//using window. to be able to access in app.js
window.categories = [
  { id: "c1", description: "PC Parts" },
  { id: "c2", description: "Pre Built" },
  { id: "c3", description: "Monitor's" },
  { id: "c4", description: "Peripherals" },
];

// This was testing code to get the funcatlity required then was later moved to app.js

// // Create buttons for each category and add them to the menu if they don't already exist
// var menu = document.querySelector("#menu");
// if (menu.innerHTML.trim() === "") {
//   // Check if buttons are already created
//   categories.forEach(function (category) {
//     var button = document.createElement("button");
//     button.innerText = category.description;
//     button.classList.add("custom-button"); // Add the class name
//     menu.appendChild(button);

//     button.addEventListener("click", function () {
//       showProducts(category);
//     });
//   });
// }

// // Show products for the first category on page load
// showProducts(categories[0]);
