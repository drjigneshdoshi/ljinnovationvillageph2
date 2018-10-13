<?php

include('verify_user.php');

//$branch_name = strtoupper($_POST['branch_name']);
$branch_name = ($_POST['branch_name']);

$sqltmp="SELECT * FROM `branch_master` where  `branch_name` = '$branch_name' ";
$res_temp = mysqli_query($connect,$sqltmp);
$data = mysqli_fetch_assoc($res_temp);

if($data!=null)
{
    $response['success']=false;
    $response['error_message']="branch Already Exits";
}
else
{    
    $sql_temp = "INSERT INTO `branch_master`(`branch_name`) VALUES ('$branch_name')"; 
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