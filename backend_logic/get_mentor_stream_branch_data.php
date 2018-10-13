<?php

//$email  = $_GET['email'];

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

$sql = "SELECT mentor_id,mentor_name,mentor_type,stream_name,branch_name,branch,stream,organization_name, specialization_name,email,contact FROM `mentor_master`, `stream_master`, `branch_master`,`user_master` where branch= branch_id and stream=stream_id and mentor_master.user_id = user_master.user_id";
$res = mysqli_query($connect,$sql);
$data2 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data2,$row);
}


$response = array("streams"=>$data,"branches"=>$data1,"mentors"=>$data2);
echo json_encode($response);

?>
