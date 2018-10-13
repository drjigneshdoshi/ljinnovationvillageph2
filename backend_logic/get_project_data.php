<?php

include('verify_user.php');

$email  = $_GET['email'];

$sql = "select * from student_master s,user_master u,project_master p,stream_master sm,branch_master b where s.user_id = u.user_id and s.student_id = p.student_id and sm.stream_id = p.project_stream and b.branch_id = p.project_branch and email='$email'";
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
