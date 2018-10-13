<?php

include('verify_user.php');
$email  = $_GET['email'];
$pid  = $_GET['problem_id'];

//$sid="1";
$sql = "select * from problem_master  where  problem_id='$pid'";
$res = mysqli_query($connect,$sql);

$row=mysqli_fetch_assoc($res);

if($row==null)
{
    $response['success']=false;
    $response['error_message']= "Data Not Available";    
}
else
{
    $response['success']=true;
    $response['data']= $row;  
}

echo json_encode($response);

?>
