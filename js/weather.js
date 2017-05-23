var apiKey = require('./../.env').apiKey;

function Weather() {
}

tempCelc = function(degFar) {
  return ((degFar - 32) / 1.8).toFixed(2)
}

tempKel = function(degFar) {
  return ((degFar + 459.67) * (5/9)).toFixed(2)
}

clouds = function(cloudData) {
  if (cloudData >= 75) {
    return "mostly cloudy.";
  }else if (cloudData >= 40) {
    return "partly cloudy.";
  }else {
    return "mostly sunny.";
  }
}

windDirection = function(windData){
  if (windData >= 281 && windData <= 348) {
    return "Northwest"
  } else if(windData >= 236 && windData <= 280){
    return "West"
  } else if(windData >= 191 && windData <= 235){
    return "Southwest"
  } else if(windData >= 146 && windData <= 190){
    return "South"
  } else if(windData >= 101 && windData <= 145){
    return "Southeast"
  } else if(windData >= 56 && windData <= 100){
    return "East"
  } else if(windData >= 12 && windData <= 55){
    return "Northeast"
  }else {
    return "North"
  }
}



Weather.prototype.getWeather = function(city, displayInfo) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response) {
      console.log(response)
    var degFar = response.main.temp
    degKel = tempKel(degFar)
    degCelc = tempCelc(degFar)
    var windDir = windDirection(response.wind.deg)
    var cloudData = clouds(response.clouds.all)
    var windSpeed = response.wind.speed
    displayInfo(city, response.main.humidity, degFar, degKel, degCelc, cloudData, windDir, windSpeed);

  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};




exports.weatherModule = Weather;
