var Weather = require('./../js/weather.js').weatherModule;
var displayInfo = function(city, humidityData, farTempData, degKel, degCelc, cloudData, windDir, windSpeed) {
  $('.showWeather').text("")
  $('.showWeather').append("<h2> The humidity in " + city + " is " + humidityData + "%.</h2><br><h2> It is " + cloudData + "</h2><br><h2> Wind is from the " + windDir + " at " + windSpeed + " mph.</h2><br>");
  $('.temp').text(" The farenheit Temp is " + farTempData )
  $('.kelvin').text(" The kelvin is " + degKel)
  $('.celcius').text(" The Celcius is " + degCelc)
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayInfo);
    $('#kelvin').show()
    $('#celcius').show()
  });
  $("#kelvin").click(function(){
    $('.kelvin').toggle()
  })
  $("#celcius").click(function(){
    $('.celcius').toggle()
  })
});
