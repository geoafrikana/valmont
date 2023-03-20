<?php
$jsonData = json_decode(file_get_contents('keys.json'), true);

$host = $jsonData['host'];
$db = $jsonData['db'];
$user = $jsonData['user'];
$pass = $jsonData['pass']; 

// Set up the database connection
$dsn = "pgsql:host=$host;dbname=$db";
$dbh = new PDO($dsn, $user, $pass);

// Set up a parameterized SQL query that uses PostGIS functions
$lat = $_POST['lat'];
$lon = $_POST['lon'];
$sql = "INSERT INTO valmont.main_val(geom) VALUES (ST_TRANSFORM(ST_SETSRID(ST_POINT($lon, $lat), 4326), 3857))";

// Prepare the query
$stmt = $dbh->prepare($sql);

// Execute the query
$stmt->execute();

?>


