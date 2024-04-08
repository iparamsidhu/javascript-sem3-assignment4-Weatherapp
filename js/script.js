const API_KEY = "c7dd4292a73284175d671e938fba2c9b";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to dynamically add student ID and name
function addStudentInfo() {
    const studentId = "200554189"; // Replace with your student ID
    const studentName = "Paramjit Singh"; // Replace with your name
    document.getElementById("student-id").innerText = studentId;
    document.getElementById("student-name").innerText = studentName;
}

// Function to fetch weather data for a given city
function getWeather() {
    const city = document.getElementById("city-input").value;
    const weather_request_url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
    fetch(weather_request_url)
        .then(response => response.json())
        .then(weather_data => {
            printCurrentWeather(city, weather_data);
            displayWeatherIcon(weather_data.weather[0].main);
        })
        .catch(error => console.error("Error fetching data:", error));
}


// Function to convert temperature from Kelvin to Celsius
function convertKelvinToCelsius(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15);
}

// Function to print current weather information
function printCurrentWeather(city, weather_data) {
    const weather = weather_data.weather[0].description;
    const temperature = convertKelvinToCelsius(weather_data.main.temp);
    const feels_like = convertKelvinToCelsius(weather_data.main.feels_like);
    const min_temp = convertKelvinToCelsius(weather_data.main.temp_min);
    const max_temp = convertKelvinToCelsius(weather_data.main.temp_max);
    const country = weather_data.sys.country;
    const current_time = new Date().toLocaleString();

    const weatherInfo = `
        <p>🌤️ Weather information for ${city}, ${country} as of ${current_time}:</p>
        <p>It is currently ${weather}</p>
        <p>Current temperature is ${temperature} °C</p>
        <p>It currently feels like ${feels_like} °C</p>
        <p>Minimum temperature will be ${min_temp} °C</p>
        <p>Maximum temperature will be ${max_temp} °C</p>
    `;

    document.getElementById('weather-info').innerHTML = weatherInfo;
}

// Function to display student ID and name
function displayStudentInfo() {
    const studentId = "200554189"; // student ID
    const studentName = "Paramjit Singh"; // name
    const studentInfo = `Student ID: ${studentId}, Name: ${studentName}`;
    document.getElementById("student-info").innerText = studentInfo;
}

