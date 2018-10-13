<?php

include('verify_user.php');
$email  = $_GET['email'];
$pid  = $_GET['problem_id'];

//$sid="1";
$sql = "select `problem_id`, `problem_title`, `problem_abstract`, `problem_stream`, `problem_branch`, `problem_desired_outcome`, `problem_applications`, `problem_tools`, `problem_tentative_workflow`, `problem_boundary_conditions`, `problem_status`, `file_name`,`stream_name`,`branch_name` from problem_master , stream_master, branch_master where  problem_id='$pid' and stream_id = problem_stream and branch_id = problem_branch";

$res = mysqli_query($connect,$sql);

$row=mysqli_fetch_assoc($res);

if($row==null)
{
    $response['success']=false;
    $response['error_message']= "Data Not Available";    
}
else
{
    $response['success']=true;
    $response['data']= $row;  
}

echo json_encode($response);

?>
