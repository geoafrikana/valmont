const getColor = (degreeOfContamination)=>{

    degreeOfContamination = degreeOfContamination.toLowerCase();

    var colorMap = {
        // these colors are defined in index.css
        'non-contaminé': 'green',// '#79B943',
        'contamination bc': 'yellow', //'#EEE824',
        'contamination ab': 'red',//'#FD4343',
        'en attente des résultats': 'blue' //'#5EB6E4'
    }

    return colorMap[degreeOfContamination]

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
          onEachFeature: function(feature, layer) {
            layer.bindPopup(displayPopup(feature))
          }
        }).addTo(map);
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