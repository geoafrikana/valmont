
var map = L.map('map').setView([45.66, -75.73], 12);
document.getElementById('category').value = "0";
var currentMarker = undefined
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
    .addTo(map);

var latField = document.getElementById('lat')
var lonField = document.getElementById('lon')


map.addEventListener('click', (e)=>{
    const coords = e.latlng;
    latField.value = coords.lat
    lonField.value= coords.lng
    if(currentMarker){
        currentMarker.remove();
    }
    currentMarker = L.marker(
        [coords.lat, coords.lng], {
            draggable:true})
    .addTo(map);
    currentMarker.addEventListener('dragend',()=>{
    latField.value = currentMarker._latlng.lat
    lonField.value= currentMarker._latlng.lng
    })
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
