// js/main.js
import { apiRequest } from "./api.js";
import { addUser, setFilterElements } from "./users.js";
import { createUserPreview } from "./ui.js";

const generateBtn = document.querySelector(".generate");
const userPreviewContent = document.getElementById("userPreviewContent");
const addUserToListBtn = document.getElementById("addUserToListBtn");
let currentUser;

generateBtn.addEventListener("click", async () => {
  const userData = await apiRequest();
  console.log(userData);
  if (userData && userData.results && userData.results.length > 0) {
    currentUser = userData.results[0]; // Extract the single user object
    userPreviewContent.innerHTML = createUserPreview(currentUser); // Use the preview function from ui.js
    $("#userPreviewModal").modal("show");
  }
});

addUserToListBtn.addEventListener("click", () => {
  if (currentUser) {
    addUser(currentUser); // Pass the single user object to addUser in users.js
    $("#userPreviewModal").modal("hide");
    currentUser = null; // Clear the current user
  }
});

// Initialize filter elements in users.js
const filterAgeInput = document.getElementById("filterAge");
const filterGenderSelect = document.getElementById("filterGender");
const filterContainer = document.querySelector(
  ".container > :nth-child(n+1):nth-child(-n+2)"
);
setFilterElements(filterAgeInput, filterGenderSelect, filterContainer);
