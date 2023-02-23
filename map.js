var map = L.map('map', {zoomControl:false}).setView([45.66285042, -75.64598285], 13);

var OpenStreetMap  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const WmsUrl = 'https://val.aponiawebsolutions.ca/geoserver/valmont/wms'

var DEM = L.tileLayer.wms(WmsUrl, {
    layers: 'color_3857',
    format: 'image/png',
    styles: 'color_style',
    attribution: "Aponia Web Solutions"
});

var DEMBlackAndWhite = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    format: 'image/png',
    styles: 'raster',
    attribution: "Aponia Web Solutions"
})

var DEMColor = L.tileLayer.wms(WmsUrl, {
    layers: 'dem_3857',
    format: 'image/png',
    styles: 'dem_topo_style',
    attribution: "Aponia Web Solutions"
})

var baseLayers = {
    OpenStreetMap,
    'DEM Colored': DEMColor,
    'DEM Black and White': DEMBlackAndWhite

};

L.control.layers(baseLayers).addTo(map);



