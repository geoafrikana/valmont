// 
const getColor = (category)=>{
    category = category.toLowerCase();
    
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

var iconMap = (getColor, category)=> {

  var customIcon = L.icon({
    iconUrl: `/assets/img/${getColor(category)}_icon.png`,
  
    iconSize:     [20, 30], // size of the icon
    iconAnchor:   [10, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [-0, -30] // point from which the popup should open relative to the iconAnchor
});

return customIcon
}


// Design popup for data based on attributes
const displayPopup = (feature)=>{
    const heading = 'Tittle here duis vitae posuere diam'
    const title = feature.properties.title
    const degreeOfContamination = feature.properties.category
    const downloadPath = feature.properties.file

    const popupContent = `<h3 style="font-size:0.8rem; padding: 3px">${heading}</h3>
    <hr>
    <h3 style="font-size:0.7rem; margin-top:20px">${title}</h3>
    <p style="font-family:arial; text-transform:capitalize"><i class="fa-xl fa-${getColor(degreeOfContamination)} fa1 fa-solid fa-circle-check"></i><span>${degreeOfContamination}</span></p>
    
    <p><a href="${downloadPath}">File name(2.3 MB).pdf</a></p>`

    return popupContent
}


// Function for displaying the resulting data

const handleJson = (data)=> {
  data = JSON.parse(data)

  L.geoJson(data, {
    // Read each point in the data then give it an icon and popup
    pointToLayer: (feature,latLon)=>{
      var icon = iconMap(getColor, feature.properties.category)
      L.marker(latLon, {icon})
      .bindPopup(displayPopup(feature))
      .addTo(map);
    }
  })

}

// End point for fetching all WFS data from geoserver
var owsRootUrl = 'https://val.aponiawebsolutions.ca/geoserver/ows';


// fetching data begins
// Additional URL parameters for specifying the data to fetch, which format it should be and which 
var params = {
  service : 'WFS',
  version : '2.0',
  request : 'GetFeature',
  typeName : 'valmont:valmont',
  outputFormat : 'application/json',
  SrsName : 'EPSG:4326'
};

// joining root url and GET parameters to form full GET URL
params = L.Util.extend(params)
var fullUrl = owsRootUrl + L.Util.getParamString(params)


// fetch data as JSON and pass to handleJSON 
fetch(fullUrl)
.then(response => response.text(response))
.then(data => handleJson(data))