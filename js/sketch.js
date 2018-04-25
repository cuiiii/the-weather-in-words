// using jquery plugin "simpleweather"
var weatherText = [
    "Stay the fuck inside. Unless you're a storm chaser",
    "Stay the fuck inside. Unless you're a storm chaser",
    "Stay the fuck inside. Unless you're a storm chaser",
    "Sorry I can't make the rain go away no matter how many weather apps you check.",
    "Sorry I can't make the rain go away no matter how many weather apps you check.",
    "The only time I'm leaving the house this winter is if I'm out of wine.",
    "The only time I'm leaving the house this winter is if I'm out of wine.",
    "The only time I'm leaving the house this winter is if I'm out of wine.",
    "Sorry I can't make the rain go away no matter how many weather apps you check.",
    "Sorry I can't make the rain go away no matter how many weather apps you check.",
    "Sorry I can't make the rain go away no matter how many weather apps you check.",
    "Nothing drastic but I'd grab an umbrella.",
    "Nothing drastic but I'd grab an umbrella.",
    "In the time it takes me to get bundled up I usually decide not to go at all.",
    "Watching the snow fall is almost as enjoyable as watching you slip and fall in it.",
    "The kind of snow that gets you in the eyes.",
    "In the time it takes me to get bundled up I usually decide not to go at all.",
    "Hail is one of nature's way of saying 'Fuck you'.",
    "Ugh. The kind of snow that hurts.",
    "Grab your bandanas unless you want to be sneezing dust for the next three days.",
    "I tried to grab fog, but I mist.",
    "Dust off your goggles, because it's hazy outside.",
    "Dust off your goggles, because it's smoky outside.",
    "Caution: the wind may try to bite you in the face.",
    "Caution: the wind may try to bite you in the face.",
    "I stay warm by avoiding people who say they like cold weather.",
    "Pale people rejoice! We've got some cloud covers today.",
    "Pale people rejoice! We've got some cloud covers today.",
    "Pale people rejoice! We've got some cloud covers today.",
    "Pale people rejoice! We've got some cloud covers today.",
    "Pale people rejoice! We've got some cloud covers today.",
    "This is perfect weather to talk about and ultimately still do absolutely nothing.",
    "It's so sunny my eyelids are sweating. Seriously. MY FUCKING EYELIDS ARE SWEATING.",
    "At least not having an office window means you'll never know how nice it is outside.",
    "At least not having an office window means you'll never know how nice it is outside.",
    "Hail is one of nature's way of saying 'Fuck you'.",
    "It's so sunny my eyelids are sweating. Seriously. MY FUCKING EYELIDS ARE SWEATING.",
    "I wish I borrowed a better umbrella today.",
    "I wish I borrowed a better umbrella today.",
    "I wish I borrowed a better umbrella today.",
    "I'm always here if someone tries to bully you into doing something outdoors.",
    "Sorry the weather is making it harder to justify tipping poorly on your GrubHub order.",
    "I'm always here if someone tries to bully you into doing something outdoors.",
    "My favourite weather is any weather that lets me cancel plans.",
    "I'm always here if someone tries to bully you into doing something outdoors.",
    "Sorry the weather is making it harder to justify tipping poorly on your GrubHub order.",
    "Let's bond over the periodic inconvenience of atmospheric precipitation.",
    "I'm always here if someone tries to bully you into doing something outdoors.",
];

// function loadWeather(location, woeid) {
//         $.simpleWeather({
//             location: 'singapore',
//             woeid:  1062617,
//             unit: 'f',
//             success: function(weather) {
//                 console.log(weather);
//                 $(".weather-text").html(weatherText[weather.code]);
//                 $(".weather-title").html(weather.title);
//                 $(".weather-icon").html('<i class="icon-' + weather.code + '"></i>');
//                 $(".weather-stats").html('<ul><li><strong>' + weather.city + ', ' + weather.region + '</strong></li>'
//                   + '<li>' + weather.temp + '&deg;F / ' + weather.alt.temp + '&deg;C</li></ul>');
//                 $(".weather-input").html('<input id="address" type="text" placeholder="Enter City, State"/>'
//                   +'<button type="submit">Submit</button>');
//             },
//             error: function(error) {
//                 $("#weather-text").html('<p>Oops, something went wrong. Try again!</p>');
//             }
//         });
//     }

// $(function() {

//     navigator.geolocation.getCurrentPosition(success, error);

//     function success(position) {
//         latitude = position.coords.latitude;
//         longitude = position.coords.longitude;
//         loadWeather(position.coords.latitude + ',' + position.coords.longitude);
//     }

//     function error() {
//         $(".weather-text").html("Aw, geolocation isn't supported by this browser.");
//         $(".weather-input").html('<input id="address" type="text" placeholder="Enter City, State"/>');
//         $(".weather-input").append('<button type="submit">Submit</button>');
//     }

//     function loadWeather(location, woeid) {
//         $.simpleWeather({
//             location: location,
//             woeid: woeid,
//             unit: 'f',
//             success: function(weather) {
//                 console.log(weather);
//                 $(".weather-text").html(weatherText[weather.code]);
//                 $(".weather-title").html(weather.title);
//                 $(".weather-icon").html('<i class="icon-' + weather.code + '"></i>');
//                 $(".weather-stats").html('<ul><li><strong>' + weather.city + ', ' + weather.region + '</strong></li>'
//                   + '<li>' + weather.temp + '&deg;F / ' + weather.alt.temp + '&deg;C</li></ul>');
//                 $(".weather-input").html('<input id="address" type="text" placeholder="Enter City, State"/>'
//                   +'<button type="submit">Submit</button>');
//             },
//             error: function(error) {
//                 $("#weather-text").html('<p>Oops, something went wrong. Try again!</p>');
//             }
//         });
//     }

//     var geocoder = new google.maps.Geocoder();

//     $('button').on('click', function() {
//         var address = $('#address').val();
//         geocoder.geocode({
//             'address': address
//         }, function(results, status) {

//             if (status == google.maps.GeocoderStatus.OK) {
//                 var latitude = results[0].geometry.location.lat();
//                 var longitude = results[0].geometry.location.lng();
//                 console.log(latitude + ',' + longitude);
//                 $('#coordinates').val(latitude + ', ' + longitude);
//                 loadWeather(latitude + ',' + longitude);
//             }
//         });
//     });

//     // //Auto complete script
//     // function insertGoogleScript() {
//     //     var google_api = document.createElement('script'),
//     //         api_key = 'AIzaSyA1XVlvaW4diiFqq0ERRwrVI6Kmo5U9hXo';

//     //     // Inject the script for Google's API and reference the initGoogleAPI
//     //     // function as a callback.
//     //     google_api.src = 'https://maps.googleapis.com/maps/api/js?key=' + api_key + '&callback=initGoogleAPI&libraries=places,geometry';
//     //     document.body.appendChild(google_api);
//     // }


//     // // SearchBox Method
//     // function initGoogleAPI() {
//     //     var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));

//     //     autocomplete.addListener('places_changed', function() {
//     //         var place = autocomplete.getPlaces()[0];
//     //         document.querySelector("#latitude").value = place.geometry.location.lat();
//     //         document.querySelector("#longitude").value = place.geometry.location.lng();
//     //     });
//     // }

//     // insertGoogleScript();

//     // $('button').on('click', function() {
//     //     var lat = $('#latitude').val(),
//     //         long = $('#longitude').val(),
//     //         city_name = $('#address').val()
//     //     $('.form').fadeOut(100, function() {
//     //         weather();
//     //         $('.screen').text('<button id="back">New Forecast</button><h3 class="city">' + city_name + '</h3><ul class="list-reset fadein-stagger" id="forecast"></ul>');
//     //     });
//     // });
// });