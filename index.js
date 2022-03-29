//http://api.weatherstack.com/current?access_key=5045986191835efffc7e038952d4cf9b&query=New%20York
//https://weatherstack.com/quickstart
const GITHUB_SEARCH_URL = 'http://api.weatherstack.com/current';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: GITHUB_SEARCH_URL,
    data: {      
      access_key: '5045986191835efffc7e038952d4cf9b',
      q: `${searchTerm}`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
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
  const results = data.current.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
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
