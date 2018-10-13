<?php

$user_data=$_REQUEST['credentials'];
$email=$_REQUEST['email'];
$verified_user = 0;
$admin = "select * from  user_master where email='$email'";
$admin_result=$connect->query($admin);
$admin_row=$admin_result->fetch_array();

$credentials=md5($admin_row['email'].":".$admin_row['passwd']);


if($credentials!=$user_data)
{
    $response['success']=false;
    $response['error_message']= "Invaid Credentials";    
    echo json_encode($response);
    die();
}

?>