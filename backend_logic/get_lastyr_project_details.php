<?php

// include('verify_user.php');

$sql = "SELECT project_id, `project_title`, `project_category`, `project_stream`, `project_branch`,`project_abstract` FROM project_master WHERE project_year=2018";
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    array_push($data,$row);
}

echo json_encode($data);

?>
