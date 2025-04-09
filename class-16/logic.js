console.log("DOM Concepts");
//DOM  -> Document Object model ->DOM tree ->

//to get root node
//console.dir(document.documentElement);

//querry selector
// const heading = document.querySelector("h1");   // single element node
//const heading = document.querySelectorAll("h1");    //nodelist element node

// const heading = document.querySelectorAll(".heading");    //nodelist element node

//const heading = document.querySelector("#head1");

//get element by ID
// const heading = document.getElementById("head1");

//get element by class name
//const heading = document.getElementsByClassName("heading");

//get elements by tag name
// const heading = document.getElementsByTagName("h1");

//manipulation
const heading = document.querySelectorAll("h1");
// heading.textContent = "Update";
// heading.forEach((item) => {
//   item.textContent = "updated";
// });

// for (let i = 0; i < heading.length; i++) {
//     const element = array[i];

// }

//styling
heading.forEach((item) => {
  item.style.color = "red";
  item.style.backgroundColor = "yellow";
});
