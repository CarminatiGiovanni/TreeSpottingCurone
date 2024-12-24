const defaultZoom = 15
let zoom = defaultZoom;
let latitude = 45.794284064900566;
let longitude = 9.704325503425144;
let map = L.map('map').fitWorld(); //setView([latitude, longitude], defaultZoom);

let yourPosIcon = L.icon({
    iconUrl: '../icon/feet.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
});

let chestnutIcon = L.icon({
    iconUrl: '../icon/chestnut.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
});

let walnutIcon = L.icon({
    iconUrl: '../icon/walnut.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    maxZoom: 20,
}).addTo(map);

function getLocation() { // called onload
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else return;
}
    
function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    map.setView([latitude, longitude], defaultZoom);
    L.marker([latitude,longitude], {icon: yourPosIcon}).addTo(map).bindPopup('You are here!') // .openPopup();
}