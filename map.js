var map = L.map('map', {zoomControl:false}).setView([45.66285042, -75.64598285], 13);

var OpenStreetMap  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const WmsUrl = 'https://val.aponiawebsolutions.ca/geoserver/wms'
const WfsUrl = 'https://val.aponiawebsolutions.ca/geoserver/wfs'

var topographic = L.tileLayer.wms(WmsUrl, {
    layers: 'color_3857',
    format: 'image/png',
    styles: 'color_style',
    opacity: 0.5,
    tiled: true,
    attribution: "Aponia Web Solutions"
}).addTo(map);

var DEMBlackAndWhite = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    format: 'image/png',
    styles: 'raster',
    opacity: 0.5,
    tiled: true,
    attribution: "Aponia Web Solutions"
})

var DEMColor = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    format: 'image/png',
    styles: 'dem_topo_style',
    opacity: 0.5,
    tiled: true,
    attribution: "Aponia Web Solutions"
})



var baseLayers = {
    OpenStreetMap
};

var overlayLayers = {
    'DEM Colored': DEMColor,
    'DEM Black and White': DEMBlackAndWhite,
    'Topographic': topographic
}



L.control.layers(baseLayers, overlayLayers).addTo(map);


L.control
    .opacity(overlayLayers, {
        collapsed: true
    }).addTo(map);
