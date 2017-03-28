$(document).ready(function (){  
  var long;
  var lat;
  if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function (position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
		//$("#data").html("latitude: " + lat + "<br>longitude: " + long);
 
  
var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid=89914b729b544c7a1915d9c4a15d6e25';
  $.getJSON(api, function (data){
    //alert(data.message.country);
    //tempSwitch = true;
   
    var myWeather = data.weather[0].description;
    var windSpeed = data.wind.speed;
    var city = data.name;
    var temp = data.main.temp;
    //displaying the temperature in centigrade and fahreiheit
    
    
    //console.log(weather);
    $("#api").html("API: " + api );
    $("#city").html(city);
    $("#windspeed").html(windSpeed);
    $("#myweather").html(myWeather); 
    $("#temp").html(temp); 
    //$("#temp").html(temp);
    /*$("#temp").click(function (){
      if(tempunit = metric)
      
    })*/
  } );
   });
}
  
  
});