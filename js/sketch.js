// using jquery plugin "simpleweather"
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather("", "1062617");
}

function printWeather(code) {
    $.simpleweather({
        code: code,
        success: function(weather) {
            if (weather.code >= 0 && weather.code <= 2) {
                html += ("<p>Stay the fuck inside. Unless you're a storm chaser.</p>");
            } else if (weather.code >= 3 && weather.code <= 4) {
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
            html = '<div class="weather-icon"><i class="icon-' + weather.code + '"></i></div>';
            html += '<ul><li><strong>' + weather.city + ', ' + weather.region + '</strong></li>';
            html += '<li>' + weather.temp + '&deg;F / ' + weather.alt.temp + '&deg;C</li></ul>';
            //print current weather code (for testing purposes)
            html += '<p>this is for testing: ' + weather.code + '</p>'
            // html += '<p>'+printWeather(weather.code+)'</p>'
            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}