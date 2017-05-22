// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.5, -72.7],
  zoom: 9,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/ccadv-map">code</a>, created by <a href="http://DataVizForAll.org">DataVizForAll.org</a> with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

$.getJSON("points.geojson", function (data){
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function( feature, latlng) {
      var marker = L.marker(latlng);
      // var popupText = "Go to <a href='http://google.com' target='_blank'>Google</a>"
      var popupText = "Go to <a href='" + feature.properties.web + "' target='_blank'>" + feature.properties.fullname +"</a></br>"
      + "View <a href='charts/" + feature.properties.name + ".png' target='_blank'> top 3 services chart</a></br>"
      + "View <a href='facts/" + feature.properties.name + ".pdf' target='_blank'> fact sheet PDF</a></br>";
      marker.bindPopup(popupText);
      return marker;
    }
  }).addTo(map);
});

// Edit to upload polygons.geojson data file from your local directory
$.getJSON("polygons.geojson", function (data) {
  geoJsonLayer = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);
});

// Edit the getColor property to match data column header in your GeoJson file
function style(feature) {
  return {
    fillColor: feature.properties.color,
    weight: 1,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.7
  };
}

// This highlights the layer on hover, also for mobile
function highlightFeature(e) {
  resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.7
  });
  info.update(layer.feature.properties);
}

// This resets the highlight after hover moves away
function resetHighlight(e) {
  geoJsonLayer.setStyle(style);
  info.update();
}

// This instructs highlight and reset functions on hover movement
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: highlightFeature
  });
}

// Creates an info box on the map
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

// Edit info box text and variables (such as props.density2010) to match those in your GeoJSON data
info.update = function (props) {
  this._div.innerHTML = '<h4>Connecticut Coalition Against Domestic Violence<br />Member Map</h4>'  +  (props ?
    '<b>' + props.fullname + '</b><br />'
    : 'Hover over a town');
};
info.addTo(map);
