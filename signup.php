<?php include 'includes/header.php' ?>
<link rel="stylesheet" href="./assets/css/signup.css">
</head>

<body>

    <?php include 'includes/nav.php';    ?>

    <div id='container'>

    <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
       if(isset($_POST['submit'])){
        $fname = $_POST['first_name'];
        $lname = $_POST['last_name'];
        $u_email = $_POST['email'];
        $role = intval($_POST['role']);
        $user_password = $_POST['password'];
        
        $jsonData = json_decode(file_get_contents('./secret/keys.json'), true);

        $servername = $jsonData['host'];
        $username = $jsonData['user'];
        $password = $jsonData['pass'];
        $db = $jsonData['db'];
        
        try {
            $conn = new PDO("pgsql:host=$servername;dbname=$db", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO valmont". ".". "user_val (first_name, last_name, email , user_role, password)
            VALUES ('" ."$fname". "','"."$lname". "','"."$u_email". "',"
            . $role. ", crypt('". $user_password ."', gen_salt('bf')));" ;
            // use exec() because no results are returned
            $conn->exec($sql);
            echo "Account created. You will now be redirected to the login page";
            echo "<script>setTimeout(\"location.href = 'login.php';\",2000);</script>";
          } catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
          }
          
          $conn = null;

        }
 }
?>

    <form action="signup.php" method="POST">
        <fieldset>
            <legend>Signup</legend>
            <div class="field-wrapper">
            <label for="email">Email</label>
            <input id="email" placeholder="email" name="email" type="email"></div>
            
            <div class="field-wrapper">
            <label for="first_name">First Name</label>
            <input id="first_name" placeholder="first_name" name="first_name" type="text"></div>
            
            <div class="field-wrapper">
            <label for="last_name">Last Name</label>
            <input id="last_name" placeholder="last_name" name="last_name" type="text"></div>
            <input name="role" type="text" value="2" hidden>
            <div class="field-wrapper">
                <label for="password">Password</label>
            <input id="password" placeholder="password" name="password" type="password">
</div>
<button value="submit" name="submit" type="submit">Submit</button>
</fieldset>
        <small>Already have an account? <a href="login.php">Sign in</a></small>
    </form>
    </div>
    <?php include 'includes/footer.php' ?>
