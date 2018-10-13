<?php

include('verify_user.php');
$branch_id=$_POST['branch_id'];

$branch_name = ($_POST['branch_name']);

$sql_temp = "UPDATE `branch_master` SET `branch_name`= '$branch_name' WHERE `branch_id` = '$branch_id'";

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