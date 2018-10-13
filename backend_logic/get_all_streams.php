<?php

$sql = "SELECT * FROM `stream_master` order by stream_name";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

$response = array("streams"=>$data);
echo json_encode($response);




?>