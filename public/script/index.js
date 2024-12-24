const defaultZoom = 15
let zoom = defaultZoom;
let latitude = 45.794284064900566;
let longitude = 9.704325503425144;
let map = L.map('map').fitWorld(); //setView([latitude, longitude], defaultZoom);

function getLocation() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
    else return;
}

function zoomin() {
    zoom = zoom + 1;
    map.setView([latitude, longitude], zoom);
    text.innerHTML = zoom;
}
function zoomout() {
    zoom = zoom - 1;
    map.setView([latitude, longitude], zoom);
    text.innerHTML = zoom;
}
    
function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    map.setView([latitude, longitude], defaultZoom);
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([latitude,longitude]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();