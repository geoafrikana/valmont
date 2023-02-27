const getColor = (category)=>{

    category = category.toLowerCase();
    

    var colorMap = {
        // these colors are defined in index.css
        'non-contaminé': 'green',// '#79B943',
        'contamination bc': 'yellow', //'#EEE824',
        'contamination ab': 'red',//'#FD4343',
        'en attente des résultats': 'blue' //'#5EB6E4'
    }

    return colorMap[category]? colorMap[category] : 'default' // #800080ff

}

var iconMap = (getColor, category)=> {
   const colorCode = getColor(category)
  console.log(colorCode)
  var customIcon = L.icon({
    iconUrl: `/assets/img/${getColor(category)}_icon.png`,
  
    iconSize:     [20, 30], // size of the icon
    iconAnchor:   [33, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-25, -90] // point from which the popup should open relative to the iconAnchor
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
var a  = 'https://val.aponiawebsolutions.ca/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=valmont%3Avalmont&outputFormat=text%2Fjavascript&jsonpCallback=parseResponse&format_options=callback%3Acb'
 a = './assets/data/data.json'


 function handleJson(data) {
        selectedArea = L.geoJson(data, {
          // onEachFeature: function(feature, layer) {
          //   layer.bindPopup(displayPopup(feature))
          // },
          pointToLayer: (feature,latLon)=>{
            var icon = iconMap(getColor, feature.properties.category)
            L.marker(latLon, {icon})
            .bindPopup(displayPopup(feature))
            .addTo(map);
          }
        })
        
        // .addTo(map);
        map.fitBounds(selectedArea.getBounds());
    }
  


fetch(a)
.then(r=>r.text(r))
.then(d => {
//   d = d.slice(3, -1)
d = JSON.parse(d)
handleJson(d)
console.log(d)

})