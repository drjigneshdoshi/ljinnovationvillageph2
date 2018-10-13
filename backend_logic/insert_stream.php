<?php

include('verify_user.php');

$stream_name = ($_POST['stream_name']);

$sqltmp="SELECT * FROM `stream_master` where  `stream_name` = '$stream_name' ";
$res_temp = mysqli_query($connect,$sqltmp);
$data = mysqli_fetch_assoc($res_temp);

if($data!=null)
{
    $response['success']=false;
    $response['error_message']="Stream Already Exits";
}
else
{    
    $sql_temp = "INSERT INTO `stream_master`(`stream_name`) VALUES ('$stream_name')"; 
	$res_temp = mysqli_query($connect,$sql_temp);

	if ( $res_temp) {
	
        $response['success']=true; 
	}
    else {   
		$response['success']=false;
        $response['error_message']= "Data Not Inserted";
	}

}	
	
echo json_encode($response);
?>