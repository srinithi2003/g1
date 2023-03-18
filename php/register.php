<?php


require '../vendor/autoload.php';

$redis=new Redis();

$redis->connect('localhost',6379);


// $datetime_1 =date('Y/m/d H:i:s'); 
// $datetime_2 = '2022-04-10 13:30:45'; 
 
// $start_datetime = new DateTime($datetime_1); 
// $diff = $start_datetime->diff(new DateTime($datetime_2)); 
 
// // echo $diff->days.' Days total<br>'; 
// // echo $diff->y.' Years<br>'; 
// // echo $diff->m.' Months<br>'; 
// // echo $diff->d.' Days<br>'; 
// // echo $diff->h.' Hours<br>'; 
// // echo $diff->i.' Minutes<br>'; 
// // echo $diff->s.' Seconds<br>';


// $total_minutes = ($diff->days * 24 * 60); 
// $total_minutes += ($diff->h * 60*60); 
// $total_minutes += $diff->i; 

// $diff=$total_minutes;

// $redis->set("time_diff",$diff);
// echo $redis->get('time_diff');
// echo 'Diff in Minutes: '.$total_minutes;





// echo $redis->get('email');
if($redis->get('email')==null){

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


    $email=$_POST['email'];
    $pass=$_POST['pass'];
    
$sql = "INSERT INTO register1(email,pass)VALUES('$email','$pass')";
if($conn->query($sql) === TRUE) {
  // echo '<script>alert("registered sucessfull")</script>';

  //echo "registered successfully";

  $redis->set('email',$email);
  echo $redis->get('email');
  // connect to mongodb


  $m = new MongoDB\Client;
//    echo "Connection to database successfully";
 
  // select a database
  $db = $m->profile;
//  echo "Database mydb selected";
  $collection = $db->profile_detail;
// echo "Collection selected succsessfully";


  if($_POST){
   
  $document = array( 
    "email" => $_POST["email"], 
     "fname" => $_POST["fname"], 
     "lname" => $_POST["lname"],
     "age" => $_POST["age"],
     "contact" => $_POST["contact"]
  );
 
  $collection->insertone($document);
  echo "Document inserted successfully";


  $redis->set('start',date('Y/m/d H:i:s'));


  }
  else{
  echo "nooo";
}


//   $sql1 = "SELECT * FROM  register where name='$email' and pass='$pass' ";
   
//   $result = $conn->query($sql1);
//   if ($result->num_rows > 0) {

//   // echo '<script>alert("hi_php")</script>';

//   while($row = $result->fetch_assoc()) {


//   }
// }
 
} else {

  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

    
    // $name=$_POST['name'];
    // $uname=$_POST['uname'];
    // $pass=$_POST['pass'];

    // // echo '<script>alert("gfi")</script>';
    // $q="INSERT INTO register(`name`,`user_name`,`pass`) values ('$name','$uname','$pass')";

    // $res=mysqli_query($connection,$q);


    // if($res){
    //     echo "inserted successfully";
    // }
    // else{
    //     echo "data not inserted";
    // }

    }
    else{
      echo "already registred";
    }




?>