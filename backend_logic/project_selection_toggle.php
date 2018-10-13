<?php
include('verify_user.php');

$project_id  = $_GET['project_id'];

$sql_temp = "SELECT * FROM `project_master` WHERE `project_id`=$project_id";
$res_temp = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp);

$project_toggle = $data['project_selected']; 

if($project_toggle=='0')
{
    $sql_temp = "UPDATE `project_master` SET `project_selected`='1' WHERE `project_id`=$project_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Project Selected for ".$data['project_category'];
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
else
{
    $sql_temp = "UPDATE `project_master` SET `project_selected`='0' WHERE `project_id`=$project_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $response['success']=true;
        $response['message'] = "Project Deselected for ".$data['project_category'];
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Error";    
    }
}
echo json_encode($response);
?>