var map = L.map('map').setView([51.505, -0.09], 13);

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

// form = document.getElementById('form')

// form.addEventListener('submit', (e)=>{
// e.preventDefault()
// const formData = new FormData();
// formData.append('coords', [latField.value, lonField.value])

// const request = new XMLHttpRequest();
// request.open("POST", "form.php");
// request.send(formData);
// })
