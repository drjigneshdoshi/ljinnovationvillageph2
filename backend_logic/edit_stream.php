<?php

include('verify_user.php');
$stream_id=$_POST['sid'];

$stream_name = ($_POST['str_name']);

$sql_temp = "UPDATE `stream_master` SET `stream_name`= '$stream_name' WHERE `stream_id` = '$stream_id'";

$res_temp = mysqli_query($connect,$sql_temp);

if ( $res_temp) {
	
        $response['success']=true; 
	}
else {   
		$response['success']=false;
        $response['error_message']= "Data Not Updated";
}

	
echo json_encode($response);
?>