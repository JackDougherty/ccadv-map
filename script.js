// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.5, -72.7],
  zoom: 9,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/ccdav-map">code</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Edit to upload GeoJSON data file from your local directory
$.getJSON("map.geojson", function (data) {
  geoJsonLayer = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);
});

// Edit ranges and colors to match your data; see http://colorbrewer.org
// Any values not listed in the ranges below displays as the last color
function getColor(d) {
  return d === "Interval House" ? 'yellow' :
         d == "The Network" ? '#b3f0ff' :
         d == "The Center For Family Justice"  ? '#ecc6ec' :
         d == "Susan B. Anthony Project"  ? '#ff4d88' :
         d == "Safe Haven of Greater Waterbury"  ? '#dfbf9f' :
         d == "Womens Center"   ? '#009900' :
         d == "Womens Support Services"   ? '#66d9ff' :
         d == "Safe Futures" ? '#e6ccff' :
         d == "Domestic Violence Program/United Services Inc.- Willimantic, CT" ? '#ffa64d' :
         d == "Domestic Violence Program/United Services Inc.-Dayville, CT" ? '#b366ff' :
         d == "The Umbrella Center For Domestic Violence Services-Ansonia, CT" ? '#4d94ff' :
         d == "The Umbrella Center For Domestic Violence Services-North Haven, CT" ? '#e6ffb3' :
         d == "Chrysalis Domestic Violence Services" ? '#a4dd88' :
         d == "Domestic Violence Crisis Center-Stamford, CT" ? '#1a53ff' :
         d == "Domestic Abuse Services-Greenwich YWCA" ? '#ffa31a' :
         d == "New Horizons" ? '#00aaff' :
         d == "Prudence Crandall Center" ? '#cca1f7' :
         d == "Domestic Violence Crisis Center- Norwalk, CT" ? '#b3d9ff' :
                    '#FFEDA0';

}
/* Display a blue point marker with pop-up text */
  L.marker([41.74, -72.67]).addTo(map) // EDIT latitude, longitude to re-position marker Interval House
  .bindPopup('Go to <a href="http://intervalhousect.org" target="_blank">Interval House</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/interval-house-graph.png">Graph</a><br>View Fact Sheet <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/interval-house-fact-sheet.pdf">Here</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.99, -72.56]).addTo(map) // EDIT latitude, longitude to re-position marker The Network
  .bindPopup('Go to <a href="http://thenetworkct.org" target="_blank">The Network</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/the-network-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.83, -71.87]).addTo(map) // EDIT latitude, longitude to re-position marker Dayville
  .bindPopup('Go to <a href="http://unitedservicesct.org/services/domestic-violence" target="_blank">Domestic Violence Program/United Services, Inc- Dayville, CT</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/dayville-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.81, -72.23]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://unitedservicesct.org/services/domestic-violence" target="_blank">Domestic Violence Program/United Services, Inc- Willimantic, CT</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/domestic-violence-program-willimantic-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.52, -72.04]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.safefuturesct.org" target="_blank">Safe Futures</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/safe-futures-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.47, -72.55]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.newhorizonsdv.com" target="_blank">New Horizons</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/new-horizons-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.33, -72.88]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.bhcare.org/page/22595-The-Umbrella-Center-for-Domestic-Violence-Services" target="_blank">The Umbrella Center for Domestic Violence Services New Haven,CT</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/umbrella-center-new-haven-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.51, -72.85]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="https://mwchrysalis.org" target="_blank">Chrysalis Domestic Violence Services</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/chrysalis-domestic-violence-services-graph.png">Graph</a><br>View Fact Sheet <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/chrysalis-fact-sheet.pdf">Here</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.65, -72.88]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="https://prudencecrandall.org" target="_blank">Prudence Crandall Center</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/prudence-crandall-center-graph.png">Graph</a><br>View Fact Sheet <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/pcc-fact-sheet.pdf">Here</a>');   // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.83, -73.12]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://sbaproject.org" target="_blank">Susan B. Anthony Project</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/susan-b-anthony-project-graph.png">Graph</a><br>View Fact Sheet <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/sbap-fact-sheet.pdf">Here</a>');   // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.55, -73.14]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.safehavengw.org" target="_blank">Safe Haven of Greater Waterbury</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/safe-haven-greater-waterbury-graph.png">Graph</a><br>View Fact Sheet <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/safe-haven-greater-waterbury-fact-sheet.pdf">Here</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.38, -73.09]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.bhcare.org/page/22595-The-Umbrella-Center-for-Domestic-Violence-Services" target="_blank">The Umbrella Center for Domestic Violence Services-Ansonia, CT</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/umbrella-center-ansonia-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.26, -73.25]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://centerforfamilyjustice.org" target="_blank">Center for Family Justice</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/center-for-family-justice-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.46, -73.42]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://wcogd.org" target="_blank">Womens Center</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/womens-center-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.91, -73.36]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.wssdv.org" target="_blank">Womens Support Services</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/womens-support-services-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.16, -73.40]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.dvccct.org" target="_blank">Domestic Violence Crisis Center-Norwalk, CT</a><br>View <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/norwalk-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.10, -73.55]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.dvccct.org" target="_blank">Domestic Violence Crisis Center-Stamford, CT</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/stamford-graph.png">Graph</a>');  // EDIT pop-up text message

/* Display a blue point marker with pop-up text */
  L.marker([41.07, -73.63]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup('Go to <a href="http://www.ywcagreenwich.org/domestic-abuse-services" target="_blank">Domestic Abuse Services-Greenwich YWCA</a><br>View Top Three Services <a href="https://aniaaliev.github.io/leaflet-map-polygon-hover/greenwich-graph.png">Graph</a>');  // EDIT pop-up text message

// Edit the getColor property to match data column header in your GeoJson file
function style(feature) {
  return {
    fillColor: getColor(feature.properties.region),
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
  this._div.innerHTML = '<h4>Connecticut Coallition Against Domestic Violence<br />Member Map 2017</h4>' +  (props ?
    '<b>' + props.region + '</b><br />'
    : 'Hover over a town');
};
info.addTo(map);

// Edit grades in legend to match the ranges cutoffs inserted above
// In this example, the last grade will appear as 5000+
//var legend = L.control({position: 'bottomright'});
//legend.onAdd = function (map) {
  //var div = L.DomUtil.create('div', 'info legend'),
    //grades = [0, 30, 50, 100, 200, 500, 1000, 5000],
    //labels = [],
    //from, to;
  //for (var i = 0; i < grades.length; i++) {
    //from = grades[i];
    //to = grades[i + 1];
    //labels.push(
      //'<i style="background:' + getColor(from + 1) + '"></i> ' +
      //from + (to ? '&ndash;' + to : '+'));
 // }
  //div.innerHTML = labels.join('<br>');
  //return div;
//};
//legend.addTo(map);

// Use in info.update if GeoJSON data contains null values, and if so, displays "--"
function checkNull(val) {
  if (val != null || val == "NaN") {
    return comma(val);
  } else {
    return "--";
  }
}

// Use in info.update if GeoJSON data needs to be displayed as a percentage
function checkThePct(a,b) {
  if (a != null && b != null) {
    return Math.round(a/b*1000)/10 + "%";
  } else {
    return "--";
  }
}

// Use in info.update if GeoJSON data needs to be displayed with commas (such as 123,456)
function comma(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
}
