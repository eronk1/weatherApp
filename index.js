
//http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b&query=New%20York
//https://weatherstack.com/quickstart
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
