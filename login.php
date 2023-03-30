<?php include 'includes/header.php' ?>
<link rel="stylesheet" href="./assets/css/signup.css">
</head>
<body>

    <?php include 'includes/nav.php';    ?>

    <?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $u_password = $_POST['password'];

        $jsonData = json_decode(file_get_contents('./secret/keys.json'), true);

        $servername = $jsonData['host'];
        $username = $jsonData['user'];
        $password = $jsonData['pass'];
        $db = $jsonData['db'];
        
        try {
            $conn = new PDO("pgsql:host=$servername;dbname=$db", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $conn->prepare("SELECT id, email, user_role FROM valmont.user_val
           WHERE email = ?  AND password = crypt(?, password)");

            $stmt->execute([$email, $u_password]);

            $user = $stmt->fetch();

            if(! $user){
                echo "user does not exist";
            }
            else{
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_email'] = $user['email'];
                $_SESSION['user_role'] = $user['user_role'];

                
            echo "Login successful. You will now be redirected to the homepage";
            echo "<script>setTimeout(\"location.href = 'index.php';\",2000);</script>";
          
            }
        }
        catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
          }

          $conn = null;
    }
}
?>

    <div id='container'>
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>">
            <fieldset>
                <legend>Sign in</legend>
            <div class="field-wrapper">
        <label for="email">Email</label>
        <input id="email" placeholder="email" name="email" type="email">
       
           </div>
           <div class="field-wrapper">
        <label for="password">Password</label>
        <input id="password" placeholder="password" name="password" type="password">
</div>
<button value="submit" name="submit" type="submit">Submit</button>
</fieldset>
<small>Don't have an account? <a href="signup.php">Sign up</a></small>
</form>

</div>
    <?php include 'includes/footer.php' ?>