<?php

include('verify_user.php');
include('verify_admin.php');

$sql = "SELECT p.project_id,m.mentor_id,m.mentor_name,project_title,project_category,project_stream,project_branch,project_abstract,pe.* FROM `project_master` p, project_evaluation pe, mentor_master m WHERE p.project_id = pe.project_id and m.mentor_id = pe.mentor_id and p.project_year ='9999'";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res))
{
    $avg = ($row['mark1']+$row['mark2']+$row['mark3']+$row['mark4']+$row['mark5'])/5;
    $row['average_rating'] = (int)$avg;
    if($avg == 0)
    $row['project_evaluated'] = 0;
    else
    $row['project_evaluated'] = 1;
    array_push($data,$row);
}    

echo json_encode($data);

?>
