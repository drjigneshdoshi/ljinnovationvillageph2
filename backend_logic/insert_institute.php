<?php

include('verify_user.php');

$inst_name = ($_POST['inst_name']);
// echo $inst_name;
$sqltmp="SELECT * FROM `institute_master` where  `inst_name` = '$inst_name' ";
$res_temp = mysqli_query($connect,$sqltmp);
$data = mysqli_fetch_assoc($res_temp);

if($data!=null)
{
    $response['success']=false;
    $response['error_message']="Institute Already Exits";
}
else
{    
    $sql_temp = "INSERT INTO `institute_master`(`inst_name`) VALUES ('$inst_name')"; 
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