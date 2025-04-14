//promises

const key = "f6a71c6a38ec5cb89b7b982df5964293";
const input = document.getElementById("input");
const button = document.getElementById("button");

// Making an API request using fetch (returns a Promise)

function data(cityName) {
  const result = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
  );
  return result;
}

button.addEventListener("click", () => {
  data(input.value)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
// fetch(apiUrl)
//   .then((response) => {
//     // Convert the response to JSON (also returns a Promise)
//     return response.json();
//   })
//   .then((data) => {
//     // Handle the JSON data
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error("Error fetching data:", error);
//   });
