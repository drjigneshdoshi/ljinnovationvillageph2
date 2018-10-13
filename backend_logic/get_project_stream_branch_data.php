<?php

$email  = $_GET['email'];

$sql = "SELECT * FROM `stream_master`";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

$sql = "SELECT * FROM `branch_master`";
$res = mysqli_query($connect,$sql);
$data1 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data1,$row);
}

//$sql = "SELECT * FROM `project_master` where email='$email'";
$sql="SELECT * FROM `project_master` p, `student_master` s, `user_master` u  WHERE p.student_id=s.student_id and s.user_id=u.user_id and u.email='$email' and project_year='9999' and project_flag='1'";
$res = mysqli_query($connect,$sql);
$data2 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data2,$row);
}

$sql = "SELECT * FROM `problem_master` where problem_status='1'";
$res = mysqli_query($connect,$sql);
$data3 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data3,$row);
}

$response = array("streams"=>$data,"branches"=>$data1,"projects"=>$data2, "problems"=>$data3);
echo json_encode($response);

?>
