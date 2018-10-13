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

$sql = "SELECT * FROM `problem_master` where problem_status='1'";
$res = mysqli_query($connect,$sql);
$data2 = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data2,$row);
}

$response = array("streams"=>$data,"branches"=>$data1,"problems"=>$data2);
echo json_encode($response);

?>
