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
function renderResult(result) {
  return `
    <div>
    ${result.temperature}
    </div>
  `;
}

function displayGitHubSearchData(data) {
  const results = (item, index) => renderResult(item);
  let temperature = results(data.current);
  $('.js-search-results .weatherCode').text(data.current.weather_code);
  $('.js-search-results .weatherDescription').text(data.current.weather_descriptions);
  //${data.current.weather_icons[0]}
  document.getElementById('weatherIcon').src = `${data.current.weather_icons[0]}`;
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
}

$(watchSubmit);
