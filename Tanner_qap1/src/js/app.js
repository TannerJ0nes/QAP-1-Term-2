/**
 * QAP1 - FRONT-END & JAVASCRIPT!!
 *
 *
 * Please update the following with your information:
 *
 *      Name:       <Tanner_Jones>
 *
 *      Date:       <Jun 6th 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
//const { products, categories } = window;

const products = window.products;

window.addEventListener("load", function () {
  var loadingOverlay = document.getElementById("loading-overlay");

  // delay of 2 seconds before hiding the loading overlay
  setTimeout(function () {
    loadingOverlay.style.display = "none";
  }, 2000);
});

const categories = window.categories;

// Create buttons for each category and add them to the menu if they don't already exist
var menu = document.querySelector("#menu");
if (menu.innerHTML.trim() === "") {
  // Check if buttons are already created incase page is reloaded
  categories.forEach(function (category) {
    var button = document.createElement("button");
    button.innerText = category.description;
    button.classList.add("custom-button");

    menu.appendChild(button);

    button.addEventListener("click", function () {
      showProducts(category);
    });
  });
}

// Show products for the first category on page load
showProducts(categories[0]);

// Function to show products based on the selected category
function showProducts(category) {
  // Update the text of the Selected Category Title above table
  var selectedCategoryTitle = document.querySelector("#selected-category");
  selectedCategoryTitle.innerText = category.description;

  // Clear the current table rows
  var tableBody = document.querySelector("#product-table tbody");
  tableBody.innerHTML = "";

  // Filter products based on the selected category from products.js
  var filteredProducts = products.filter(function (product) {
    return product.categories.includes(category.id) && !product.discontinued;
  });

  // Loop over the filtered products and create table rows
  filteredProducts.forEach(function (product) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.innerText = product.name;
    row.appendChild(nameCell);

    var descriptionCell = document.createElement("td");
    descriptionCell.innerText = product.description;
    row.appendChild(descriptionCell);

    var priceCell = document.createElement("td");
    priceCell.innerText = "$" + (product.price / 100).toFixed(2);
    row.appendChild(priceCell);

    // Add click event listener to the row to log item on click
    row.addEventListener("click", function () {
      console.log(product);
    });

    tableBody.appendChild(row);
  });
}
