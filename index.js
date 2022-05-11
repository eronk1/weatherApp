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
