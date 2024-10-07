/*
 * JavaScript Boilerplate for Weather Dashboard Assignment
 * 
 * This JavaScript file is part of the Asynchronous JavaScript assignment.
 * Your task is to complete the functions with appropriate async/await,
 * handle errors, and update the DOM with the fetched data.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * weather dashboard works as expected.
 */

// Function: Fetch Weather Data
const API_KEY = '3bc7190d4127dc9810a66df9c62b886d';

// Function: Fetch Weather Data
async function fetchWeatherData(location) {
    // TODO: Fetch data from the API using async/await
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        // TODO: Handle errors gracefully
        console.error('Error fetching weather data:', error);
        throw error;
    }
}    


// Function: Display Weather Data
function displayWeatherData(data) {
    // TODO: Update the DOM with weather data
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Function: Get Weather
async function getWeather(location) {
    try {
        // TODO: Fetch weather data and display it
        const weatherData = await fetchWeatherData(location);
        displayWeatherData(weatherData);
    } catch (error) {
        // TODO: Display an error message in the DOM
        const weatherInfo = document.getElementById('weatherData');
        weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});