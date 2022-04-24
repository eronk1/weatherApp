
//http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b&query=New%20York
//https://weatherstack.com/quickstart
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
  console.log($.ajax(settings));
}
//<img src = "${result.weather_icons[0]}"></img>

function displayGitHubSearchData(data) {
  $('.js-search-results .weatherCode').text(data.current.weather_code);
  $('.js-search-results .weatherDescription').text(data.current.weather_descriptions);

  switch(data.current.weather_code){
    case 113:
    break;
    case 116:
    break;
    case 119:
    break;
    case 122:
    break;
    case 143:
    break;
    case 176:
    break;
    case 179:
    break;
    case 182:
    break;  
    case 185:
    break;
    case 200:
    break;
    case 227:
    break;
    case 230:
    break;  
    case 248:
    break;
    case 260:
    break;
    case 263:
    break;
    case 266:
    break;  
    case 281:
    break;
    case 284:
    break;
    case 293:
    break;
    case 296:
    break;  
    case 299:
    break;
    case 302:
    break;
    case 305:
    break;
    case 308:
    break;
    case 311:
    break;
    case 314:
    break;
    case 317:
    break;
    case 320:
    break;
    case 323:
    break;
    case 326:
    break;
    case 329:
    break;
    case 332:
    break;  
    case 335:
    break;
    case 338:
    break;
    case 350:
    break;
    case 353:
    break;  
    case 356:
    break;
    case 359:
    break;
    case 362:
    break;
    case 365:
    break;  
    case 368:
    break;
    case 371:
    break;
    case 374:
    break;
    case 377:
    break;  
    case 386:
    break;
    case 389:
    break;
    case 392:
    break;
    case 395:
    break;
    default:
      console.log("error has occured");
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
