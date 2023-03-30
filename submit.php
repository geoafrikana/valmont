<?php
include('includes/header.php');
include('includes/leaflet_links.php');
?>

<title>Submit Point</title>
<link rel="stylesheet" href="./assets/css/submit.css">
</head>

<body>
    <?php include('includes/nav.php') ?>
    <div class="container">
    <div id="map"></div>
    <div class='bottom'><?php 
    if(isset($_SESSION['user_email'])){
        echo "<form action='form.php' id='form' method='post'>

            <label for='title'>Title</label>
            <input id='title' name='title' type='text'>
            <br>

            <label for='subtitle'>Subtitle</label>
            <input id='subtitle' name='subtitle' type='text'>
            <br>

            <label for='description'>Description</label>
            <input id='description' name='description' type='text'>
            <br>

            <label for='type'>Type</label>
            <select name='type' id='type'>
                <option value='1'>Ponts et Ponceaux</option>
                <option value='2'>Echantillon de sol</option>
            </select>
            <br>

            <div id='cat-div' style='display:none'>

                <label for='category'>Category</label>
                <select name='category' id='category'>
                    <option value='0' selected disabled hidden>None</option>
                    <option value='1'>'Non-contaminé'</option>
                    <option value='2'>Contamination BC</option>
                    <option value='3'>Contamination AB</option>
                    <option value='4'>'En attente des résultats'</option>
                </select>
                <br>
            </div>

            <label for='year'>Year</label>
            <input id='year' name='year' pattern='\d{4}' type='test'>
            <br>


            <label for='area'>Area</label>
            <select name='area' id='area'>
                <option value='1'>Alberta</option>
                <option value='2'>Quebec</option>
                <option value='3'>Manitoba</option>
                <option value='4'>Ontario</option>
            </select>
            <br>
            

            <label for='lat'>Latitude</label>
            <input id='lat' name='lat' type='text'>
            <br>

            <label for='lon'>Longitude</label>
            <input id='lon' name='lon' type='text'>
<fieldset>
<legend>Status</legend>
    <input type='radio' id='visible' name='status' value='visible'>
    <label for='status'>Visible</label><br>
    
    <input type='radio' id='archived' name='status' value='archived'>
    <label for='status'>Archived</label><br>
</fieldset>
     <input class='submit-btn' type='submit' value='Submit' name='submit'>
     </form>";
    }
    else{
        echo '<h1>You must be Logged In to Submit a Point</h1>';
        echo '<p><a href="login.php">Sign in</a></p><br>';

    }
    ?>

        
    </div>
    <script src="./assets/js/submit.js" defer></script>
</div>
</body>

</html>