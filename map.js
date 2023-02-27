//initiate a leaflet map
var map = L.map('map', {zoomControl:false}).setView([45.66285042, -75.64598285], 13);

// Add OSM map as base layer
var OpenStreetMap  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// End point for fetching DEM data
const WmsUrl = 'https://val.aponiawebsolutions.ca/geoserver/wms'

// These URL Parameters are general to all three DEM layers
const WmsDefaultParams = {
    format: 'image/png',
    opacity: 0.5,
    tiled: true,
    attribution: "Aponia Web Solutions"
}


var topographic = L.tileLayer.wms(WmsUrl, {
    layers: 'color_3857',
    styles: 'color_style',
    ...WmsDefaultParams
    
}).addTo(map);

var DEMBlackAndWhite = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    styles: 'raster',
    ...WmsDefaultParams
})

var DEMColor = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    styles: 'dem_style',
    ...WmsDefaultParams
})


// Only one base layer can be visible at once
var baseLayers = {
    OpenStreetMap
};


// Multiple overlay layers can be visible simultaneously
var overlayLayers = {
    'DEM Colored': DEMColor,
    'DEM Black and White': DEMBlackAndWhite,
    'Topographic': topographic
}


// Add the overlay and base layer to the selector at the top-right of the map
L.control.layers(baseLayers, overlayLayers).addTo(map);


// This is the widget for controlling the transparency overlay layers.
L.control
    .opacity(overlayLayers, {
        collapsed: true
    }).addTo(map);
