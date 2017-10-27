if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
else {
    alert("Geolocation API doesn't support.");
}
function showCurrentLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coords = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 20,
        center: coords,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(
        document.getElementById("maps_m"), mapOptions
    );

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: "Location!"
    });
}

var x = document.getElementById("user_location");
function getCurrentLocation() {
    var geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(showCurrentLocation);
}
function showCurrentPosition(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
}
function GetUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(ShowUserPosition, ShowBrowserError);
    } else {
        x.innerHTML = "Browser doesn't support geolocation.";
    }
}
function ShowUserPosition(position) {
    var latLon = position.coords.latitude + "," + position.coords.longitude;
    var imgUrl = "http://maps.googleapis.com/maps/api/staticmap?center="
        + latLon + "&zoom=14&size=400x300&sensor=false";
    document.getElementById("maps_trail").innerHTML = "<img src='" + imgUrl + "'>";
}
function ShowBrowserError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Permission denied.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Position unavaible.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "Time out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Unknown error.";
            break;
    }
}