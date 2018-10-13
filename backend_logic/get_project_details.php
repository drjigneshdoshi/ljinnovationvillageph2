<?php

include('verify_user.php');

$sql = "SELECT project_id, `project_title`, `project_category`, `project_stream`, `project_branch`,`project_abstract` FROM project_master WHERE project_id NOT IN (SELECT project_id FROM project_evaluation) and project_year='9999'";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

echo json_encode($data);

?>
