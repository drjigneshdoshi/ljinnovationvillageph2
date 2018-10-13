<?php

include('verify_user.php');
$id=$_POST['inst_id'];

$inst_name = ($_POST['i_name']);

$sql_temp = "UPDATE `institute_master` SET `inst_name`= '$inst_name' WHERE `inst_id` = '$id'";

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