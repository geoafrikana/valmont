// 
var found = false;
var currentPopupLat = null;
var currentPopupLng = null;
const getColor = (category) => {
  category ? category.toLowerCase(): '';

  // These colors are in defined in index.css
  var colorMap = {
    // these colors are defined in index.css
    'non-contaminé': 'green',// '#79B943',
    'contamination bc': 'yellow', //'#EEE824',
    'contamination ab': 'red',//'#FD4343',
    'en attente des résultats': 'blue' //'#5EB6E4'
  }
  return colorMap[category] ? colorMap[category] : 'default' // #800080ff
}

// Design custom markers for the point layers

var iconMap = (getColor, category) => {

  var customIcon = L.icon({
    iconUrl: `./assets/img/${getColor(category)}_icon.png`,

    iconSize: [20, 30], // size of the icon
    iconAnchor: [10, 30], // point of the icon which will correspond to marker's location
    popupAnchor: [-0, -30] // point from which the popup should open relative to the iconAnchor
  });

  return customIcon
}

// clears points from map
const clearPoints = () => {
  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer)
    }

  })
}

// Design popup for data based on attributes
const displayPopup = (feature) => {
  const heading = 'Tittle here duis vitae posuere diam'
  const title = feature.properties.title
  const degreeOfContamination = feature.properties.category
  const downloadPath = feature.properties.file

  const popupContent = `<h3 style="font-size:0.8rem; padding: 3px">${heading}</h3>
    <hr>
    <h3 style="font-size:0.7rem; margin-top:20px">${title}</h3>
    <p style="font-family:arial; text-transform:capitalize"><i class="fa-xl fa-${getColor(degreeOfContamination)} fa1 fa-solid fa-circle-check"></i><span>${degreeOfContamination ? degreeOfContamination : 'Not Applicable'}</span></p>
    
    <p><a href="${downloadPath}">File name(2.3 MB).pdf</a></p>`

  return popupContent
}


// Function for displaying the resulting data

const handleJson = (data) => {
  data = JSON.parse(data)
  L.geoJson(data, {
    // Read each point in the data then give it an icon and popup
    pointToLayer: (feature, latLon) => {
      var icon = iconMap(getColor, feature.properties.category)
      var m = L.marker(latLon, { icon })
      m.bindPopup(displayPopup(feature)).addTo(map);

      if (found && currentPopupLat == latLon.lat && currentPopupLng == latLon.lng) {
        m.openPopup()
      }
    }
  })

}



// Get leaflet map bounds and convert to geoserver format
const calculateBBox = () => {
  //https://docs.geoserver.org/stable/en/user/tutorials/wmsreflector.html
  //bbox=minx,miny,maxx,maxy
  //x is longitude, y is latitude
  var bounds = map.getBounds();
  bounds = [bounds['_southWest']['lng'], //minx
  bounds['_southWest']['lat'], //miny
  bounds['_northEast']['lng'], //maxx
  bounds['_northEast']['lat'] //maxy
  ]
  bounds = bounds.toString()

  return bounds
}



// fetch data as JSON and pass to handleJSON 
const fetchPoints = (boundingBox) => {

  // End point for fetching all WFS data from geoserver
  var owsRootUrl = 'http://ec2-52-90-102-152.compute-1.amazonaws.com/geoserver/valmont/ows';

  // fetching data begins
  // Additional URL parameters for specifying the data to fetch, which format it should be and which 
  var params = {
    service: 'WFS',
    version: '1.0.0',
    request: 'GetFeature',
    typeName: 'valmont:main_val',
    outputFormat: 'application/json',
    SrsName: 'EPSG:4326', // We need data to be returned as degree lat/lon not UTM coordinates
    bbox: boundingBox + ',EPSG:4326' // Native CRS is EPSG:3857 but leaflet supplies boundingBox in EPSG:4326
  };

  // joining root url and GET parameters to form full GET URL
  params = L.Util.extend(params)
  var fullUrl = owsRootUrl + L.Util.getParamString(params)

  fetch(fullUrl)
    .then(response => response.text(response))
    .then(data => handleJson(data))

}

//When map first loads, the default bounding 
var boundingBox = calculateBBox()
fetchPoints(boundingBox)


map.addEventListener('movestart', () => {

  var valmontPoints = []
  found = false
  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      valmontPoints.push(layer)
    }

  })
  currentPopup = null;
  valmontPoints.forEach((v) => {

    if (v.isPopupOpen()) {
      found = true
      currentPopupLat = v._latlng.lat
      currentPopupLng = v._latlng.lng
    }
  })

})

// When map zooms or pans, we get the bounding box of viewport after zoom/pan, clear existing points then fetch and display new points
map.addEventListener('moveend', () => {
  var boundingBox = calculateBBox()
  clearPoints();
  fetchPoints(boundingBox)

})