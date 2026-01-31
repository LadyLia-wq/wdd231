const tempSpan = document.getElementById("temp");
const descSpan = document.getElementById("description");
const forecastList = document.getElementById("forecast");
const iconImg = document.getElementById("weatherIcon");

// Ghana (Accra) location
const lat = 5.55602; 
const lon = -0.19690;
const apiKey = "941f4ec249c96ce02f36a69129570725";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // current weather
        const current = data.list[0];
        tempSpan.textContent = current.main.temp.toFixed(1);
        descSpan.textContent = current.weather[0].description;

        // icon
        const iconCode = current.weather[0].icon;
        iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        iconImg.alt = current.weather[0].description;

        // 3-day forecast at midday
        forecastList.innerHTML = "";

        const forecasts = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 3);

        forecasts.forEach(day => {
            const date = new Date(day.dt_txt);
            const dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            const li = document.createElement("li");
            li.textContent = `${dayName}: ${day.main.temp.toFixed(1)}°C`;

            forecastList.appendChild(li);
        });

    } catch (error) {
        forecastList.innerHTML = "<li>Weather unavailable</li>";
        console.error("Weather error:", error);
    }
}

getWeather();
