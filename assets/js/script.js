function getCurrent(){
   var cityName = document.querySelector('#cityName').value
    let response = fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityName+ "&units=imperial&appid=c25abb99ad2391bfd113073aaf182b5f")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
      response.clear();
    })
    .then((response) => {
        document.getElementById("current-temp").innerHTML = response.main.temp;
        document.getElementById("feels-like").innerHTML = response.main.feels_like;
        document.getElementById("temp-max").innerHTML = response.main.temp_max;
        document.getElementById("temp-min").innerHTML = response.main.temp_min;
        var lon = response.coord.lon;
        var lat = response.coord.lat;

            



    });
    let data = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.7684&lon=-86.158&units=imperial&exclude=minutely,hourly,alerts&appid=c25abb99ad2391bfd113073aaf182b5f")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      return data;
      data.clear();
    })
    .then((data) => {
        document.getElementById("day-1").innerHTML = data.daily[0].temp.day;
        document.getElementById("day-2").innerHTML = data.daily[1].temp.day;
        document.getElementById("day-3").innerHTML = data.daily[2].temp.day;
        document.getElementById("day-4").innerHTML = data.daily[3].temp.day;
        document.getElementById("day-5").innerHTML = data.daily[4].temp.day;


            



    });
  }
  
  