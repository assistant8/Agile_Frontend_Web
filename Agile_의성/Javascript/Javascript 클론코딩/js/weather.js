function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "015e18f5cdf3bd39438af0e98f4ef532";
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
  //promise 바로되지않음
}
function onGeoError() {
  alert("cant fint you");
}
/////
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
