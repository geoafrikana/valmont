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
        label: 'Layers Opacity',
    }).addTo(map);


    var getBBox = ()=>{
        var bounds = map.getBounds();
        bounds = [bounds._southWest.lng, bounds._southWest.lat, bounds._northEast.lng, bounds._northEast.lat].join(',')
        return bounds
    }

    // var bounds = 
    $.ajax(WfsUrl,{
        type: 'GET',
        data: {
          service: 'WFS',
          version: '1.1.0',
          request: 'GetFeature',
          typename: 'valmont:dummy_places',
          srsname: 'EPSG:4326',
          outputFormat: 'text/javascript',
        //   bbox:  bounds
          },
        dataType: 'jsonp',
        jsonpCallback:'callback:handleJson',
        jsonp:'format_options'
       });
        //Geojson style file
        var myStyle = {
          'color': 'red'
        }
      // the ajax callback function
      function handleJson(data) {
        console.log(data.features.length)
          selectedArea = L.geoJson(data, {
            style: myStyle,
            onEachFeature: function(feature, layer) {
              layer.bindPopup(`ID: ${feature.properties.fid}`)
            }
          }).addTo(map);
        // map.fitBounds(selectedArea.getBounds());
      }