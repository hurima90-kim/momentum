const API_KEY = '0b6a5bd54188e99d0d93e50dcd8ed9ac';

function handleGeoSucces(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp } = data.main;

      document.querySelector('.city').innerText = name;
      document.querySelector('.icon').src =
        'https://openweathermap.org/img/wn/' + icon + '.png';
      document.querySelector('.description').innerText = description;
      document.querySelector('.temp').innerText = temp + '°C';
    })
  );
}

function handleGeoError() {
  console.log('Cant access GEO location');
}

navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
