<?php

include('verify_user.php');

$sql = "select * from project_master p,project_evaluation pe,mentor_master m,user_master u,stream_master s,branch_master b where m.mentor_id = pe.mentor_id and p.project_id = pe.project_id and m.user_id = u.user_id and p.project_stream = s.stream_id and p.project_branch = b.branch_id and u.email = '$email'";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    $avg = ($row['mark1']+$row['mark2']+$row['mark3']+$row['mark4']+$row['mark5'])/5;
    $row['average_rating'] = (int)$avg;
    array_push($data,$row);
}

echo json_encode($data);

?>