var map = L.map('map').setView([46.23, 2.41], 6);
document.getElementById('category').value = "0";

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
    .addTo(map);


var latField = document.getElementById('lat')
var lonField = document.getElementById('lon')


map.addEventListener('click', (e)=>{
    const coords = e.latlng;
    latField.value = coords.lat
    lonField.value= coords.lng
})

var type = document.getElementById('type')

type.addEventListener('change', ()=>{
    if(type.value == 2){
        document.getElementById('cat-div').style.display = 'block'
    }
    else{
        document.getElementById('cat-div').style.display = 'none'
        document.getElementById('category').value = "0"
    }
})
