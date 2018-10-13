<?php
include('verify_user.php');

$project_id  = $_GET['project_id'];

$sql_temp = "SELECT * FROM `project_master` WHERE `project_id`='$project_id'";
$res_temp = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp);

$project_toggle = $data['project_flag']; 

if($project_toggle=='0')
{
    $sql_temp = "UPDATE `project_master` SET `project_flag`='1' WHERE `project_id`='$project_id'";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Project Proposal Approved  ".$project_id;
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
else
{
    $sql_temp = "UPDATE `project_master` SET `project_flag`='0' WHERE `project_id`=$project_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Project Proposal rejected  ";
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
echo json_encode($response);
?>