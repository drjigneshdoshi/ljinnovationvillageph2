<?php
include('verify_user.php');
include('verify_admin.php');

$project_id = $_POST['projects'];


for($i=0;$i<count($project_id);$i++)
{

    $sql_temp = "DELETE FROM `project_evaluation` WHERE `project_id` = $project_id[$i]";
    $res_temp = mysqli_query($connect, $sql_temp);

    if($res_temp==true)
    {
        $flag=1;
    }  
}    

if($flag==1)
{
    
    $response['success']=true;
}
else
{
    $response['success']=false;
    $response['error_message']= "Allocated Project Not Removed";    
}
echo json_encode($response);
?>