<?php

$sql = "SELECT * FROM `institute_master` order by inst_name";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

$response = array("institutes"=>$data);
echo json_encode($response);




?>