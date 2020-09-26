
////Open Weather API..........
// const search = document.getElementById("search-btn");
// search.addEventListener("click", function(){
//     const inputCity = document.getElementById("search-box").value;
//     weatherStatus(inputCity)
// })

// function weatherStatus(city){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2f76c7953f0f08900d8f20974a620623`)
//     .then(res => res.json())
//     .then(data => setWeather(data));
// }

// function setWeather(data){
//     console.log(data);
//     document.getElementById("icon").setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
//     document.getElementById("city").innerText = data.name;
//     document.getElementById("temp").innerText = data.main.temp;
//     document.getElementById("status").innerText = data.weather[0].main
// }


//Weather stack API............ 
function inputCity(){
    const city = document.getElementById("search-box").value;
    weatherStatus(city)
}

function weatherStatus(city){
    fetch(`http://api.weatherstack.com/current?access_key=054c2e70bf16f7294e3f2ad6875fcb22&query=${city}`)
    .then(res => res.json())
    .then( data => {
        setWeather(data)
    })
}
function setWeather(data){
    document.getElementById("icon").setAttribute("src", data.current.weather_icons[0]);
    document.getElementById("city").innerText = data.location.name;
    document.getElementById("country").innerText = data.location.country;
    document.getElementById("temp").innerText = data.current.temperature;
    document.getElementById("status").innerText = data.current.weather_descriptions[0];
}