
<?php
$redis=new Redis();

$redis->connect('localhost',6379);







// //$redis->set('start',date('Y/m/d H:i:s'));
// $redis->set('end',date('Y/m/d H:i:s'));
// echo $redis->get('start');
// echo "\n";
// echo $redis->get('end');


// echo '<script>alert("Feedback submitted sucessfull")</script>';
$servername = "localhost";
$username = "root";
$password = "";
$dbname="guvi";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// echo '<script>alert("hi_php")</script>';

if(isset($_POST['search_post_btn']))
{

    $mail=$_POST['email'];
    $pass=$_POST['pass'];
    
    $sql = "SELECT * from register1 where email='$mail' and pass='$pass'";

    // echo $mail;
 
      $result = $conn->query($sql);
  if ($result->num_rows == 1) {

  // echo '<script>alert("hi_php")</script>';

  echo "user present";
}
else{
  echo 'no user';
}


}

$conn->close();

 ?>


