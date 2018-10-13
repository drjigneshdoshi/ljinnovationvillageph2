<?php
include('verify_user.php');

$problem_id  = $_GET['problem_id'];

$sql_temp = "SELECT * FROM `problem_master` WHERE `problem_id`=$problem_id";
$res_temp = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp);

$problem_toggle = $data['problem_status']; 

if($problem_toggle=='0')
{
    $sql_temp = "UPDATE `problem_master` SET `problem_status`='1' WHERE `problem_id`=$problem_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Problem Approved ";
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
else
{
    $sql_temp = "UPDATE `problem_master` SET `problem_status`='0' WHERE `problem_id`=$problem_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Problem Deselected  ";
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
echo json_encode($response);
?>