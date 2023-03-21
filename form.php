<?php
$jsonData = json_decode(file_get_contents('./secret/keys.json'), true);

$host = $jsonData['host'];
$db = $jsonData['db'];
$user = $jsonData['user'];
$pass = $jsonData['pass']; 

// Set up the database connection
$dsn = "pgsql:host=$host;dbname=$db";
$dbh = new PDO($dsn, $user, $pass);

// Set up a parameterized SQL query that uses PostGIS functions

    $title = $_POST['title'];
    $subtitle = $_POST['subtitle'];
    $description = $_POST['description'];
    $type = $_POST['type'];
    $year = $_POST['year'];
    $area = $_POST['area'];

    if($_POST['status'] =='archived'){
        $status = true;
    }
    elseif ($_POST['status'] == 'visible'){
        $status = false;
    }

    $lat = $_POST['lat'];
    $lon = $_POST['lon'];


    
    $sql = "INSERT INTO main_val(title, subtitle, 
    description, type_id, year, area_id,
     status, geom)
     VALUES ($title, $subtitle, $description, $type,
     $year, $area, $status,
     ST_TRANSFORM(ST_SETSRID(ST_POINT($lon, $lat), 4326), 3857))";

    if(isset($_POST['category'])){
        $category = $_POST['category'];

        $sql = "INSERT INTO main_val(title, subtitle, 
        description, type_id, category_id, year, area_id,
         status, geom)  VALUES ($title, $subtitle, $description, $type,
         $category, $year, $area, $status, ST_TRANSFORM(ST_SETSRID(ST_POINT($lon, $lat), 4326), 3857))";
   
    }

    print_r($sql);
    
    // // // Prepare the query
    $stmt = $dbh->prepare($sql);

    // // // Execute the query
    $stmt->execute();
    
    ?>


