// js/users.js
import { createUserCard } from "./ui.js";

const userCardsContainer = document.querySelector(".user-cards-container");
let allUsers = [];
let filterAgeInputElem;
let filterGenderSelectElem;
let filterContainerElem;

function setFilterElements(ageInput, genderSelect, container) {
  filterAgeInputElem = ageInput;
  filterGenderSelectElem = genderSelect;
  filterContainerElem = container;

  // Initially hide the filter
  if (filterContainerElem) {
    filterContainerElem.style.display = "none";

    filterAgeInputElem.addEventListener("input", () => {
      const ageFilter = parseInt(filterAgeInputElem.value);
      const filteredUsers = allUsers.filter(
        (user) => isNaN(ageFilter) || user.dob.age === ageFilter
      );
      renderUsers(filteredUsers);
    });

    filterGenderSelectElem.addEventListener("change", () => {
      const genderFilter = filterGenderSelectElem.value;
      const filteredUsers = allUsers.filter(
        (user) => !genderFilter || user.gender === genderFilter
      );
      renderUsers(filteredUsers);
    });
  }
}

function addUser(user) {
  allUsers.push(user);
  renderUsers(allUsers);
}

function renderUsers(users) {
  userCardsContainer.innerHTML = "";
  users.forEach((user) => {
    userCardsContainer.innerHTML += createUserCard(user);
  });

  // Show/hide filter based on whether there are users
  if (filterContainerElem) {
    filterContainerElem.style.display = users.length > 0 ? "block" : "none";
  }
}

export { addUser, setFilterElements };
