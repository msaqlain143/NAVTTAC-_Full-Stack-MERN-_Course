// const input = document.getElementById("input");
// const button = document.getElementById("button");

// Making an API request using fetch (returns a Promise)

// function data(cityName) {
//   const result = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
//   );
//   return result;
// }

// button.addEventListener("click", () => {
//   data(input.value)
//     .then((data) => {
//       return data.json();
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const input = document.getElementById("input");
const button = document.getElementById("button");
const resultDiv = document.getElementById("result");

async function getWeatherData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
        <h3>📍 Weather Information</h3>
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Country:</strong> ${data.sys.country}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather Station:</strong> ${data.base}</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: #ffcccb;">${error.message}</p>`;
  }
}

button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) {
    getWeatherData(city);
  } else {
    alert("Please enter a city name.");
  }
});
