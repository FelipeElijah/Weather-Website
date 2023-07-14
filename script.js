let weather = {
    apiKey: "",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};