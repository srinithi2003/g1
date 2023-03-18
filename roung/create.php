<?php

require '../vendor/autoload.php';


$client=new MongoDB\Client;

$client->dropDatabase('profile');

$companydb=$client->profile;

$res=$companydb->createCollection('profile_details');

$collect=$companydb->profile_details;
$collect1=$companydb->profile_details;
?>