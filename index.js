//http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b&query=New%20York
//https://weatherstack.com/quickstart
function replaceHide(theClass){
  $(theClass).removeClass("hide");
  $(theClass).addClass("visible");  
}
function replaceVisible(theClass){
  $(theClass).removeClass("visible");
  $(theClass).addClass("hide");
}

function resetPicture(){
  replaceVisible('#ClearSkyDay');
  replaceVisible('#ClearSkyNight');
  replaceVisible('#DarkCloud');
  replaceVisible('.Rain');
  replaceVisible('#houseDay');
  replaceVisible('#houseNight');
  replaceVisible('#LightCloud');
  replaceVisible('#PartlyCloud');
  replaceVisible('.Snow');
  $("#grass").css("background-color","#63CB63");
  $("body").css("background-color","rgb(126, 255, 255)");

}

const GITHUB_SEARCH_URL = 'http://api.weatherstack.com/current?access_key=7e05fb3d3c5494354bac6310f5fa6504';

function getDataFromApi(searchTerm, callback) {
  // const settings = {
  //   url: GITHUB_SEARCH_URL,
  //   data: {      
  //     query: `${searchTerm}`
  //   },
  //   dataType: 'json',
  //   type: 'GET',
  //   success: callback
  // };

  // $.ajax(settings);
  callback(getRandomWeatherData(searchTerm))
}
//<img src = "${result.weather_icons[0]}"></img>

function displayGitHubSearchData(data) {
  let current = data.current;
  $('#place').text(data.request.query);
  $('#observation_time').text(current.observation_time);
  if(current.is_day == "no"){
    $('#is_day').text("Night");
  }else{
    $('#is_day').text("Day");
  }
  $('#temperature').text(current.temperature);
  $('#weather_description').text(current.weather_descriptions);
  $('#humidity').text(current.humidity);
  $('#precip').text(current.precip);
  function checkDayFunction(){
    if(current.is_day == "yes"){
      replaceHide("#houseDay")
      replaceHide("#ClearSkyDay");
      $("body").css("background-color","rgb(126, 255, 255)");
    }else if(current.is_day == "no"){
      replaceHide("#houseNight");
      replaceHide("#ClearSkyNight");
      $("body").css("background-color","rgb(78, 28, 227)");
      
    }else{
      console.log("error has occured loading the DayNight stuff");
    }
  } 
    function NoSunDay(){
      if(current.is_day == "yes"){
        replaceHide("#houseDay")
        $("body").css("background-color","rgb(126, 255, 255)");
      }else if(current.is_day == "no"){
        replaceHide("#houseNight");
        $("body").css("background-color","rgb(78, 28, 227)");
      }else{
        console.log("error has occured loading the NoSun stuff");
      }
    }
    function dayFog(){
      if(current.is_day == "yes"){
        $("body").css("background-color","rgb(225, 241, 250)");//light blueWhite
      }else if(current.is_day == "no"){
        $("body").css("background-color","rgb(118, 121, 207)");//light purpleBlue
      }
    }
    function dayDark(){
      if(current.is_day == "yes"){
        $("body").css("background-color","rgb(46, 87, 112)");//darkish blue
      }else if(current.is_day == "no"){
        $("body").css("background-color","rgb(50, 31, 120)");//darkish purple blue
      }
    }
    
  switch(current.wind_dir){
    case "N":
    $('#wind_dir').text("North");
    break;
    case "E":
    $('#wind_dir').text("East");
    break;
    case "W":
    $('#wind_dir').text("West");
    break;
    case "S":
    $('#wind_dir').text("South");
    break;
    case "NE":
    $('#wind_dir').text("Northeast");
    break;
    case "NW":
    $('#wind_dir').text("Northwest");
    break;
    case "SW":
    $('#wind_dir').text("Southwest");
    break;
    case "SE":
    $('#wind_dir').text("Southeast");
    break;
    default:
      $('#wind_dir').text(current.wind_dir);
    break;
  }
  $('#wind_speed').text(current.wind_speed);
  $(".starting-page").addClass("hide");
  $(".data").removeClass("hide").addClass("visible");
  let ClearSkyDay = $('#ClearSkyDay');
  let ClearSkyNight = $("#ClearSkyNight");
  let DarkCloud = $("#DarkCloud");
  let heavyRain = $("#heavyRain");
  let houseDay = $("#houseNight");
  let houseNight= $("#LightCloud");
  let LightCloud= $("#PartlyCloud");
  switch(current.weather_code){
    
    case 113:
    resetPicture();
    checkDayFunction();

    break;
    case 116:
    resetPicture();
    checkDayFunction();
    replaceHide("#PartlyCloud");
    break;
    case 119:
    resetPicture();
    NoSunDay();
    replaceHide("#LightCloud");
    break;
    case 122:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide("#DarkCloud");
    break;
    //Rain mist
    case 143:
    resetPicture();
    NoSunDay();
    replaceHide("#LightCloud")
    replaceHide(".Rain");
    break;
    //patchy rain nearby
    case 176:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    break;
    case 179:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    break;
    case 182:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    break;  
    case 185:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    break;
    case 200:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    break;
    case 227:
    resetPicture();
    checkDayFunction();
    replaceHide("#LightCloud");
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 230:
    resetPicture();
    NoSunDay();
    replaceHide("#DarkCloud");
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    dayFog();
    break;  
    case 248:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    dayFog();
    break;
    case 260:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Snow")
    dayFog();
    break;
    case 263:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    dayFog();
    replaceHide(".Rain");
    break;
    case 266:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    dayFog();
    replaceHide(".Rain");
    break;  
    case 281:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    dayFog();
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 284:
    resetPicture();
    NoSunDay();
    replaceHide('#DarkCloud');
    dayFog();
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 293:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;
    case 296:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;  
    case 299:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;
    case 302:
    resetPicture();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;
    case 305:
    resetPicture();
    NoSunDay();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    dayDark();
    break;
    case 308:
    resetPicture();
    dayDark();
    NoSunDay();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    break;
    case 311:
    resetPicture();
    dayFog();
    NoSunDay();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    $("#grass").css("background-color","white");
    break;
    case 314:
    resetPicture();
    dayFog();
    NoSunDay();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    $("#grass").css("background-color","white");
    break;
    case 317:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    break;
    case 320:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 323:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 326:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 329:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 332:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;  
    case 335:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 338:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 350:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    //ice pellets
    break;
    case 353:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;  
    case 356:
    resetPicture();
    NoSunDay();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    break;
    case 359:
    resetPicture();
    NoSunDay();
    dayDark();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    break;
    case 362:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    break;
    case 365:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;  
    case 368:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 371:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 374:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    break;
    case 377:
    resetPicture();
    $("#grass").css("background-color","white");
    break;  
    case 386:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Rain");
    break;
    case 389:
    resetPicture();
    NoSunDay();
    dayDark();
    replaceHide('#DarkCloud');
    replaceHide(".Rain");
    break;
    case 392:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#LightCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    case 395:
    resetPicture();
    NoSunDay();
    dayFog();
    replaceHide('#DarkCloud');
    replaceHide(".Snow");
    $("#grass").css("background-color","white");
    break;
    default:
      console.log("error has occured");
      resetPicture();
    break;
  };
};

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
};

$(watchSubmit);


function getRandomWeatherData(searchTerm) {
  const weatherCodes = [
      { code: 395, description: "Moderate or heavy snow in area with thunder", icon: "wsymbol_0012_heavy_snow_showers" },
      { code: 392, description: "Patchy light snow in area with thunder", icon: "wsymbol_0016_thundery_showers" },
      { code: 389, description: "Moderate or heavy rain in area with thunder", icon: "wsymbol_0024_thunderstorms" },
      { code: 386, description: "Patchy light rain in area with thunder", icon: "wsymbol_0016_thundery_showers" },
      { code: 377, description: "Moderate or heavy showers of ice pellets", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 374, description: "Light showers of ice pellets", icon: "wsymbol_0013_sleet_showers" },
      { code: 371, description: "Moderate or heavy snow showers", icon: "wsymbol_0012_heavy_snow_showers" },
      { code: 368, description: "Light snow showers", icon: "wsymbol_0011_light_snow_showers" },
      { code: 365, description: "Moderate or heavy sleet showers", icon: "wsymbol_0013_sleet_showers" },
      { code: 362, description: "Light sleet showers", icon: "wsymbol_0013_sleet_showers" },
      { code: 359, description: "Torrential rain shower", icon: "wsymbol_0018_cloudy_with_heavy_rain" },
      { code: 356, description: "Moderate or heavy rain shower", icon: "wsymbol_0010_heavy_rain_showers" },
      { code: 353, description: "Light rain shower", icon: "wsymbol_0009_light_rain_showers" },
      { code: 350, description: "Ice pellets", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 338, description: "Heavy snow", icon: "wsymbol_0020_cloudy_with_heavy_snow" },
      { code: 335, description: "Patchy heavy snow", icon: "wsymbol_0012_heavy_snow_showers" },
      { code: 332, description: "Moderate snow", icon: "wsymbol_0020_cloudy_with_heavy_snow" },
      { code: 329, description: "Patchy moderate snow", icon: "wsymbol_0020_cloudy_with_heavy_snow" },
      { code: 326, description: "Light snow", icon: "wsymbol_0011_light_snow_showers" },
      { code: 323, description: "Patchy light snow", icon: "wsymbol_0011_light_snow_showers" },
      { code: 320, description: "Moderate or heavy sleet", icon: "wsymbol_0019_cloudy_with_light_snow" },
      { code: 317, description: "Light sleet", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 314, description: "Moderate or Heavy freezing rain", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 311, description: "Light freezing rain", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 308, description: "Heavy rain", icon: "wsymbol_0018_cloudy_with_heavy_rain" },
      { code: 305, description: "Heavy rain at times", icon: "wsymbol_0010_heavy_rain_showers" },
      { code: 302, description: "Moderate rain", icon: "wsymbol_0018_cloudy_with_heavy_rain" },
      { code: 299, description: "Moderate rain at times", icon: "wsymbol_0010_heavy_rain_showers" },
      { code: 296, description: "Light rain", icon: "wsymbol_0017_cloudy_with_light_rain" },
      { code: 293, description: "Patchy light rain", icon: "wsymbol_0017_cloudy_with_light_rain" },
      { code: 284, description: "Heavy freezing drizzle", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 281, description: "Freezing drizzle", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 266, description: "Light drizzle", icon: "wsymbol_0017_cloudy_with_light_rain" },
      { code: 263, description: "Patchy light drizzle", icon: "wsymbol_0009_light_rain_showers" },
      { code: 260, description: "Freezing fog", icon: "wsymbol_0007_fog" },
      { code: 248, description: "Fog", icon: "wsymbol_0007_fog" },
      { code: 230, description: "Blizzard", icon: "wsymbol_0020_cloudy_with_heavy_snow" },
      { code: 227, description: "Blowing snow", icon: "wsymbol_0019_cloudy_with_light_snow" },
      { code: 200, description: "Thundery outbreaks in nearby", icon: "wsymbol_0016_thundery_showers" },
      { code: 185, description: "Patchy freezing drizzle nearby", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 182, description: "Patchy sleet nearby", icon: "wsymbol_0021_cloudy_with_sleet" },
      { code: 179, description: "Patchy snow nearby", icon: "wsymbol_0013_sleet_showers" },
      { code: 176, description: "Patchy rain nearby", icon: "wsymbol_0009_light_rain_showers" },
      { code: 143, description: "Mist", icon: "wsymbol_0006_mist" },
      { code: 122, description: "Overcast", icon: "wsymbol_0004_black_low_cloud" },
      { code: 119, description: "Cloudy", icon: "wsymbol_0003_white_cloud" },
      { code: 116, description: "Partly Cloudy", icon: "wsymbol_0002_sunny_intervals" },
      { code: 113, description: "Clear/Sunny", icon: "wsymbol_0001_sunny" }
  ];

  // Function to get a random integer between min and max (inclusive)
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Randomly select a weather code
  const randomWeather = weatherCodes[getRandomInt(0, weatherCodes.length - 1)];

  // Create the response object
  const response = {
      "request": {
          "type": "City",
          "query": searchTerm,
          "language": "en",
          "unit": "m"
      },
      "location": {
          "name": searchTerm,
          "country": "United States of America",
          "region": "Arizona",
          "lat": "33.539",
          "lon": "-112.185",
          "timezone_id": "America/Phoenix",
          "localtime": "2024-06-07 13:05",
          "localtime_epoch": 1717765500,
          "utc_offset": "-7.0"
      },
      "current": {
          "observation_time": "08:05 PM",
          "temperature": getRandomInt(-10, 40),  // Random temperature for variety
          "weather_code": randomWeather.code,
          "weather_icons": [
              `https://cdn.worldweatheronline.com/images/wsymbols01_png_64/${randomWeather.icon}.png`
          ],
          "weather_descriptions": [
              randomWeather.description
          ],
          "wind_speed": getRandomInt(0, 100),  // Random wind speed for variety
          "wind_degree": getRandomInt(0, 360),  // Random wind degree for variety
          "wind_dir": ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][getRandomInt(0, 15)],
          "pressure": getRandomInt(950, 1050),  // Random pressure for variety
          "precip": getRandomInt(0, 50),  // Random precipitation for variety
          "humidity": getRandomInt(0, 100),  // Random humidity for variety
          "cloudcover": getRandomInt(0, 100),  // Random cloud cover for variety
          "feelslike": getRandomInt(-10, 40),  // Random feels like temperature for variety
          "uv_index": getRandomInt(0, 10),  // Random UV index for variety
          "visibility": getRandomInt(0, 20),  // Random visibility for variety
          "is_day": getRandomInt(0, 1) ? "yes" : "no"
      }
  };

  return response;
}