//http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b&query=New%20York
//https://weatherstack.com/quickstart
<<<<<<< HEAD
/*WeatherCode	Condition	DayIcon	NightIcon
395	Moderate or heavy snow in area with thunder	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
392	Patchy light snow in area with thunder	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
389	Moderate or heavy rain in area with thunder	wsymbol_0024_thunderstorms	wsymbol_0040_thunderstorms_night
386	Patchy light rain in area with thunder	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
377	Moderate or heavy showers of ice pellets	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
374	Light showers of ice pellets	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
371	Moderate or heavy snow showers	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
368	Light snow showers	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
365	Moderate or heavy sleet showers	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
362	Light sleet showers	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
359	Torrential rain shower	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
356	Moderate or heavy rain shower	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
353	Light rain shower	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
350	Ice pellets	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
338	Heavy snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
335	Patchy heavy snow	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
332	Moderate snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
329	Patchy moderate snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
326	Light snow	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
323	Patchy light snow	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
320	Moderate or heavy sleet	wsymbol_0019_cloudy_with_light_snow	wsymbol_0035_cloudy_with_light_snow_night
317	Light sleet	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
314	Moderate or Heavy freezing rain	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
311	Light freezing rain	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
308	Heavy rain	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
305	Heavy rain at times	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
302	Moderate rain	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
299	Moderate rain at times	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
296	Light rain	wsymbol_0017_cloudy_with_light_rain	wsymbol_0025_light_rain_showers_night
293	Patchy light rain	wsymbol_0017_cloudy_with_light_rain	wsymbol_0033_cloudy_with_light_rain_night
284	Heavy freezing drizzle	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
281	Freezing drizzle	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
266	Light drizzle	wsymbol_0017_cloudy_with_light_rain	wsymbol_0033_cloudy_with_light_rain_night
263	Patchy light drizzle	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
260	Freezing fog	wsymbol_0007_fog	wsymbol_0007_fog
248	Fog	wsymbol_0007_fog	wsymbol_0007_fog
230	Blizzard	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
227	Blowing snow	wsymbol_0019_cloudy_with_light_snow	wsymbol_0035_cloudy_with_light_snow_night
200	Thundery outbreaks in nearby	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
185	Patchy freezing drizzle nearby	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
182	Patchy sleet nearby	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
179	Patchy snow nearby	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
176	Patchy rain nearby	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
143	Mist	wsymbol_0006_mist	wsymbol_0006_mist
122	Overcast	wsymbol_0004_black_low_cloud	wsymbol_0004_black_low_cloud
119	Cloudy	wsymbol_0003_white_cloud	wsymbol_0004_black_low_cloud
116	Partly Cloudy	wsymbol_0002_sunny_intervals	wsymbol_0008_clear_sky_night
113	Clear/Sunny	wsymbol_0001_sunny	wsymbol_0008_clear_sky_night
*/
function ID(id){
  return document.getElementById(id);
}
/*function ChangeClass(className){
  return $('#ClearSkyDay').removeClass("hide")
  $('#ClearSkyDay').addClass("visible");
}
*/
=======
>>>>>>> 60670864dc1380d94bb1a19caec095ecd64235b7
function resetPicture(){
  $('#ClearSkyDay').removeClass("visible");
  $('#ClearSkyNight').removeClass("visible");
  $('#DarkCloud').removeClass("visible");
  $('#heavyRain').removeClass("visible");
  $('#houseDay').removeClass("visible");
  $('#houseNight').removeClass("visible");
  $('#LightCloud').removeClass("visible");
  $('#PartlyCloud').removeClass("visible");
  $('#PartlyCloud').addClass("hide");
  $('#ClearSkyDay').addClass("hide");
  $('#ClearSkyNight').addClass("hide");
  $('#DarkCloud').addClass("hide");
  $('#heavyRain').addClass("hide");
  $('#houseDay').addClass("hide");
  $('#houseNight').addClass("hide");
  $('#LightCloud').addClass("hide");

}
<<<<<<< HEAD

=======
>>>>>>> 60670864dc1380d94bb1a19caec095ecd64235b7
const GITHUB_SEARCH_URL = 'http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: GITHUB_SEARCH_URL,
    data: {      
      query: `${searchTerm}`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
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
    ClearSkyDay.removeClass("hide").ClearSkyDay.addClass("visible");
    houseDay.removeClass("hide").houseDay.addClass("visible");
    break;
    case 116:
    resetPicture();
    $('#ClearSkyDay').removeClass("hide");
    $('#ClearSkyDay').addClass("visible");
    $('#ClearSkyDay').removeClass("hide");
    $('#ClearSkyDay').addClass("visible");
    break;
    case 119:
    resetPicture();
    break;
    case 122:
    resetPicture();
    break;
    case 143:
    resetPicture();
    break;
    case 176:
    resetPicture();
    break;
    case 179:
    resetPicture();
    break;
    case 182:
    resetPicture();
    break;  
    case 185:
    resetPicture();
    break;
    case 200:
    resetPicture();
    break;
    case 227:
    resetPicture();
    break;
    case 230:
    resetPicture();
    break;  
    case 248:
    resetPicture();
    break;
    case 260:
    resetPicture();
    break;
    case 263:
    resetPicture();
    break;
    case 266:
    resetPicture();
    break;  
    case 281:
    resetPicture();
    break;
    case 284:
    resetPicture();
    break;
    case 293:
    resetPicture();
    break;
    case 296:
    resetPicture();
    break;  
    case 299:
    resetPicture();
    break;
    case 302:
    resetPicture();
    break;
    case 305:
    resetPicture();
    break;
    case 308:
    resetPicture();
    break;
    case 311:
    resetPicture();
    break;
    case 314:
    resetPicture();
    break;
    case 317:
    resetPicture();
    break;
    case 320:
    resetPicture();
    break;
    case 323:
    resetPicture();
    break;
    case 326:
    resetPicture();
    break;
    case 329:
    resetPicture();
    break;
    case 332:
    resetPicture();
    break;  
    case 335:
    resetPicture();
    break;
    case 338:
    resetPicture();
    break;
    case 350:
    resetPicture();
    break;
    case 353:
    resetPicture();
    break;  
    case 356:
    resetPicture();
    break;
    case 359:
    resetPicture();
    break;
    case 362:
    resetPicture();
    break;
    case 365:
    resetPicture();
    break;  
    case 368:
    resetPicture();
    break;
    case 371:
    resetPicture();
    break;
    case 374:
    resetPicture();
    break;
    case 377:
    resetPicture();
    break;  
    case 386:
    resetPicture();
    break;
    case 389:
    resetPicture();
    break;
    case 392:
    resetPicture();
    break;
    case 395:
    resetPicture();
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
