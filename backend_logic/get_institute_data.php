<?php

include('verify_user.php');
$email  = $_GET['email'];
$id  = $_GET['inst_id'];

//$sid="1";
$sql = "select * from institute_master  where  inst_id='$id'";
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
