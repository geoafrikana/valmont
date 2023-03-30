<?php
print_r ($_POST);
// $jsonData = json_decode(file_get_contents('./secret/keys.json'), true);

// $host = $jsonData['host'];
// $db = $jsonData['db'];
// $user = $jsonData['user'];
// $pass = $jsonData['pass']; 

// // Set up the database connection
// $dsn = "pgsql:host=$host;dbname=$db";
// $dbh = new PDO($dsn, $user, $pass);

// // Set up a parameterized SQL query that uses PostGIS functions

//     $title = $_POST["title"];
//     $subtitle = $_POST["subtitle"];
//     $description = $_POST["description"];
//     $type = intval($_POST['type']);
    


//     $year = intval($_POST['year']);
//     $area = intval($_POST['area']);
//     $lat = floatval($_POST['lat']);
//     $lon = floatval($_POST['lon']);

//     if($_POST['status'] =='archived'){
//       $status = 't';
//   }
//   elseif ($_POST['status'] == 'visible'){
//       $status = 'f';
//   }

   
//     try {
//         $conn = new PDO("pgsql:host=$host;dbname=$db", $user, $pass);

//         // set the PDO error mode to exception
//         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        

//         $sql = "INSERT INTO valmont.main_val(title, subtitle, description, type_id, year, area_id, status, geom) 
//         VALUES ('" .$title. "' ,'" .$subtitle. "', '" .$description. "',"
//          .$type. "," .$year."," .$area. ",'" .$status. "', ST_TRANSFORM(ST_SetSRID(ST_POINT(".$lon."," .$lat."), 4326), 3857))";

//     if(isset($_POST['category'])){
//         $category = intval($_POST['category']);

//     $sql = "INSERT INTO valmont.main_val(title, subtitle, description, type_id, category_id, year, area_id, status, geom) 
//     VALUES ('" .$title. "' ,'" .$subtitle. "', '" .$description. "',"
//      .$type. "," .$category. "," .$year."," .$area. ",'" .$status. "', ST_TRANSFORM(ST_SetSRID(ST_POINT(".$lon."," .$lat."), 4326), 3857))";
    
//   }

//     print_r($sql);
//     echo "<br>";
//     echo "<br>";
//     echo "<br>";
//     echo "<br>";

//     $conn->exec($sql);

//     echo "Data Inserted";

//       } catch(PDOException $e) {
//         echo "Connection failed: " . $e->getMessage();
//       }
    

//       $conn = null;
    
    ?>


