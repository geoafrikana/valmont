const getColor = (category)=>{

    category = category.toLowerCase();
    

    var colorMap = {
        // these colors are defined in index.css
        'non-contaminé': 'green',// '#79B943',
        'contamination bc': 'yellow', //'#EEE824',
        'contamination ab': 'red',//'#FD4343',
        'en attente des résultats': 'blue' //'#5EB6E4'
    }

    return colorMap[category] ? colorMap[category] : 'default' // #800080ff

}

var iconMap = (getColor, category)=> {
   const colorCode = getColor(category)
  var customIcon = L.icon({
    iconUrl: `/assets/img/${getColor(category)}_icon.png`,
  
    iconSize:     [20, 30], // size of the icon
    iconAnchor:   [10, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [-0, -30] // point from which the popup should open relative to the iconAnchor
});

return customIcon
}


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



const handleJson = (data)=> {
  data = JSON.parse(data)

  L.geoJson(data, {
    pointToLayer: (feature,latLon)=>{
      var icon = iconMap(getColor, feature.properties.category)
      L.marker(latLon, {icon})
      .bindPopup(displayPopup(feature))
      .addTo(map);
    }
  })

}


var owsRootUrl = 'https://val.aponiawebsolutions.ca/geoserver/ows';

var params = {
  service : 'WFS',
  version : '2.0',
  request : 'GetFeature',
  typeName : 'valmont:valmont',
  outputFormat : 'application/json',
  SrsName : 'EPSG:4326'
};

params = L.Util.extend(params)
var fullUrl = owsRootUrl + L.Util.getParamString(params)


fetch(fullUrl)
.then(response => response.text(response))
.then(data => handleJson(data))