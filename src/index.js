var map = L.map('map').setView([34.77, -96.67], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2FsZWJkbTk3IiwiYSI6ImNsYTZlM2g2YzBxcmszb3JuaGFmNmQ2aHAifQ.gN8FEa-IARFeqzfHayKkKQ'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

var marker1 = L.marker([34.777889, -96.664457]).addTo(map);
var marker2 = L.marker([34.809212, -96.740362]).addTo(map);

marker1.bindPopup("<b>Caleb's House</b>").openPopup();
marker2.bindPopup("<b>Mark's House</b>").openPopup();
