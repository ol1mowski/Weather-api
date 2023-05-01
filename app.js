navigator.geolocation.getCurrentPosition(( position => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeather(lat, long)
}));

const getWeather = (lat, long) => {
    const apiKey = '248d369aa6322178f4f2620b2da7f29c';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    fetch(url).
    then(response => response.json())
    .then(weather => {
        console.log(weather)
        const city = document.querySelector('.weatherContainer__city');
        const temp = document.querySelector('.weatherContainer__temp__temp');
        const wind = document.querySelector('.weatherContainer__wind__data');
        const description = document.querySelector('.weatherContainer__sky__description');
        city.innerText = `${weather.name}`
        temp.innerText = `${Math.round(weather.main.temp)} ℃`;
        wind.innerText = `${weather.wind.speed} km/h`;
        description.innerText = `${weather.weather[0].description}`;
    }).catch(err => {
        const infoE = document.querySelector('.weatherContainer__box');
        infoE.innerText = err;
    })
}

//weather.name
//weather.main.temp
//weather.weather.description
//weather.wind.speed