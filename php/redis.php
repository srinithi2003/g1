<?php
require '../vendor/autoload.php';

$redis=new Redis();

$redis->connect('localhost',6379);
if($redis){
    $redis->set('me',23);
    

    echo $redis->get('me');
}

?>