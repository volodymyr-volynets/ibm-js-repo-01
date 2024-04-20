function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;
    const apiKey = 'cfd15f1ac105cf86ea405ef2cf1ab0d8';
    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lng=${lng}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = JSON.stringify(error);
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );