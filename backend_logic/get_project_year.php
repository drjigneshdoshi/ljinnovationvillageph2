<?php

$sql = "SELECT DISTINCT project_year year FROM project_master order by 1 DESC";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

echo json_encode($data);

?>
