var Weather = require('./../js/weather.js').weatherModule;
var displayInfo = function(city, humidityData, farTempData, degKel, degCelc, cloudData, windDir, windSpeed) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%. The farenheit Temp is " + farTempData + ". The kelvin is " + degKel + "." + "  The Celcius is " + degCelc + ". It is " + cloudData + " Wind is from the " + windDir + " at " + windSpeed + " mph.");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayInfo);
  });
});
