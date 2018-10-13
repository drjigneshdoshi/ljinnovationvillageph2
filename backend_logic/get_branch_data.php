<?php

include('verify_user.php');
$email  = $_GET['email'];
$bid  = $_GET['branch_id'];

//$sid="1";
$sql = "select * from `branch_master`  where  branch_id='$bid'";
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
