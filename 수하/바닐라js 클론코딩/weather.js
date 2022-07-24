const APIKEY = "2b9a7f52d26563da528666df2d3536f9";

function onGeoError(){
    alert("can't get info")
}

function onGeoOk(info){
    const lat = info.coords.latitude;
    const lng = info.coords.longitude;
    console.log("you live in", lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    //units=metric 은 섭씨 보도록, lat lng APIKEY는 변수니 저렇게 넣도록
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")

            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        })
}

 navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)