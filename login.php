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

            $user_id = $stmt->fetch();

            print_r($user_id);
            // echo "<h1>$user_id</h1>";
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