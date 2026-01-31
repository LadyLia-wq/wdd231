const tempSpan = document.getElementById("temp");
const descSpan = document.getElementById("description");
const forecastList = document.getElementById("forecast");

const lat = 5.6037;   // Accra (example – change if needed)
const lon = -0.1870;
const apiKey = "YOUR_API_KEY";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    tempSpan.textContent = data.list[0].main.temp.toFixed(1);
    descSpan.textContent = data.list[0].weather[0].description;

    forecastList.innerHTML = "";
    for (let i = 8; i <= 24; i += 8) {
        const li = document.createElement("li");
        li.textContent = `${data.list[i].dt_txt.split(" ")[0]}: ${data.list[i].main.temp.toFixed(1)}°C`;
        forecastList.appendChild(li);
    }
}

getWeather();
