/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

// Check if 'products' variable is already defined
// if (!window.products) {
//   window.products = []; // Define 'products' variable if not already defined
// }

// Add your product objects to the 'products' array
// Using window. to be able to access in app.js
window.products = [
  {
    id: "p1",
    name: "Intel Core i5",
    description: "12600KF 3.6 Ghz",
    price: 21994,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p2",
    name: "Intel Core i7",
    description: "12700KF 5.0 Ghz",
    price: 27651,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p3",
    name: "AMD Ryzen 5",
    description: "7600X 3.8 GHz",
    price: 23090,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p4",
    name: "Intel Core i5",
    description: "11260H 3.6 Ghz",
    price: 13000,
    discontinued: true,
    categories: ["c1"],
  },
  {
    id: "p5",
    name: "ASUS ROG Strix",
    description: "650 Full Modular 80 Plus Gold 650W ATX Power Supply",
    price: 13500,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p6",
    name: "MSI Performance Gaming Motherboard",
    description: "AMD Ryzen 2ND and 3rd Gen AM4 M.2 USB 3",
    price: 13999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p7",
    name: "MSI PRO Z690-A",
    description: "roSeries Motherboard (ATX, 12th Gen Intel Core, Wi-Fi 6E)",
    price: 24998,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p8",
    name: "DELL Gaming PC Desktop Computer",
    description:
      "Intel Quad I5 up to 3.6GHz, 16GB Memory, 128G SSD + 3TB, Radeon RX 550 4G GDDR5",
    price: 34998,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p9",
    name: "CyberpowerPC",
    description:
      "Intel Core i9 11900KF 3.5GHz, GeForce RTX 3070 8GB, 16GB DDR4, 1TB",
    price: 232432,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p10",
    name: "Skytech Chronos Mini Gaming PC",
    description: "Intel Core i3 10100F 3.6 GHz, GTX 1650, 500GB SSD, 16G DDR4",
    price: 87898,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p11",
    name: "KOORUI",
    description: "22 Inch Computer Monitor, FHD 1080P",
    price: 10899,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p12",
    name: "SANSUI",
    description: "22 inch, FHD 75Hz Computer Monitor",
    price: 10799,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p13",
    name: "MSI",
    description: "HD FreeSync Gaming Monitor 24 Curved Non-Glare 1ms",
    price: 12899,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p14",
    name: "ASUS",
    description: "27” 1080P Monitor (VZ27EHE) - Full HD, IPS, 75Hz, 1ms,",
    price: 18898,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p15",
    name: "Dell",
    description: "24 Monitor",
    price: 13998,
    discontinued: true,
    categories: ["c3"],
  },
  {
    id: "p16",
    name: "HyperX SoloCast",
    description: "USB Condenser Gaming Microphone",
    price: 6999,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p17",
    name: "RAGZAN RGB",
    description: "Gaming Mouse Pad",
    price: 2699,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p18",
    name: "SteelSeries",
    description: "Apex 3 RGB Gaming Keyboard",
    price: 6398,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p19",
    name: "SteelSeries",
    description: "Rival 3 Gaming Mouse",
    price: 2998,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p20",
    name: "Logitech",
    description: "G502 HERO High Performance Wired Gaming Mouse",
    price: 5998,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p21",
    name: "Razer Kraken X",
    description: "USB Ultralight Gaming Headset: 7.1 Surround Sound",
    price: 5998,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p22",
    name: "Beats",
    description: "Solo3 Wireless On-Ear Headphones",
    price: 24995,
    discontinued: false,
    categories: ["c4"],
  },

  // Add more product objects as needed
];

// This was testing code to get the funcatlity required then was later moved to app.js

// // Function to show products based on the selected category
// function showProducts(category) {
//   // Update the text of the Selected Category Title
//   var selectedCategoryTitle = document.querySelector("#selected-category");
//   selectedCategoryTitle.innerText = category.description;

//   // Clear the current table rows
//   var tableBody = document.querySelector("#product-table tbody");
//   tableBody.innerHTML = "";

//   // Filter products based on the selected category
//   var filteredProducts = products.filter(function (product) {
//     return product.categories.includes(category.id) && !product.discontinued;
//   });

//   // Loop over the filtered products and create table rows
//   filteredProducts.forEach(function (product) {
//     var row = document.createElement("tr");

//     var nameCell = document.createElement("td");
//     nameCell.innerText = product.name;
//     row.appendChild(nameCell);

//     var descriptionCell = document.createElement("td");
//     descriptionCell.innerText = product.description;
//     row.appendChild(descriptionCell);

//     var priceCell = document.createElement("td");
//     priceCell.innerText = "$" + (product.price / 100).toFixed(2);
//     row.appendChild(priceCell);

//     // Add click event listener to the row
//     row.addEventListener("click", function () {
//       console.log(product); // Log the selected product object
//     });

//     tableBody.appendChild(row);
//   });
// }
