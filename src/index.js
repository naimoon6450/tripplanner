const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoibmFpbW9vbjY0NTAiLCJhIjoiY2p2dHkxNWdhM2xsYTQ4cW8wM3Nrand1eCJ9.hwQWgRwPoNZsOBdwXFGQ6Q';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const domElem = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(domElem).setLngLat([-87.6354, 41.8885]).addTo(map);
