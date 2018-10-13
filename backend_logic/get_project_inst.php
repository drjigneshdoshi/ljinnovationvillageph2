<?php

$sql = "select distinct institute_name project_inst from project_master where project_year = '9999' order by 1";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

echo json_encode($data);

?>
