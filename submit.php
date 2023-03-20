<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
    crossorigin=""></script>
    <link rel="stylesheet" href="submit.css">
</head>
<body>
    <div id="map"></div>
<div class='bottom'>

    <form action= "form.php" id='form' method='POST'>
        <label for="lat">latitude</label>
        <input id='lat' name='lat' type="text">
        <br>
        
        <label for="lon">Longitude</label>
        <input id='lon' name='lon' type="text">

        <button type="submit">Submit</button>
    </form>
</div>
    <script src="submit.js" defer></script>
    
</body>
</html>