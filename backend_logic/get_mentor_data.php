<?php

$sql = "select * from mentor_master m,user_master u where m.user_id=u.user_id";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

echo json_encode($data);

?>
