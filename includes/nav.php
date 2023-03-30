
<nav class="navbar">
        <div class="brand-title">Home</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="<?php if( ! isset($_SESSION['user_email'])){echo "login.php";}else{echo "#";} ?>"><?php echo $_SESSION['user_email'] ?? 'Guest' ?></a></li>
            <li><a href="submit.php">Add Point</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>