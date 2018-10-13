<?php

$email  = $_GET['email'];

$sql = "SELECT * FROM `stream_master` order by stream_name";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

$sql = "SELECT * FROM `branch_master` order by branch_name";
$res = mysqli_query($connect,$sql);
$data1 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data1,$row);
}

//$sql = "SELECT * FROM `project_master` where email='$email'";
$sql="SELECT * FROM `project_master` p, `student_master` s, `user_master` u  WHERE p.student_id=s.student_id and s.user_id=u.user_id and u.email='$email'  and project_flag='1' order by project_id desc ";
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

$sql = "SELECT * FROM `institute_master` order by inst_name";
$res = mysqli_query($connect,$sql);
$data4 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data4,$row);
}

$response = array("streams"=>$data,"branches"=>$data1,"projects"=>$data2, "problems"=>$data3,"institutes"=>$data4 );
echo json_encode($response);

?>
