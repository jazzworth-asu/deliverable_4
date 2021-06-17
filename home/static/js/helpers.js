function getLocation() {

    var loc = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            loc.innerHTML = "Latitude: " + (position.coords.latitude).toFixed(2) + ", Longitude: " + (position.coords.longitude).toFixed(2);
        });
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}