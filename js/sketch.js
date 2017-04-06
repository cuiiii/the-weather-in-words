// using jquery plugin "simpleweather"

// browser support
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

// pull location w button
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude);
  });
});


$(document).ready(function() {
  loadWeather('','1062617'); //input location and/or woeid, default is Singapore
});

function printWeather(code) {
  $.simpleweather({
    code: code,
    success: function(weather) {
       if(weather.code >= 0 && weather.code <=2) {
        html += ("<p>Stay the fuck inside. Unless you're a storm chaser.</p>");
      } else if (weather.code >= 3 && weather.code <=4) {
        html += ("<p>You're going to need some waterproofing. In case the thunder didn't already tell you.</p>");
      } 
    }
  })
}

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i></h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.temp+'&deg;F / '+weather.alt.temp+'&deg;C</li></ul>'; 

      //print current weather code (for testing purposes)
      html += '<p>'+weather.code+'</p>'
      // html += '<p>'+printWeather(weather.code+)'</p>'
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}