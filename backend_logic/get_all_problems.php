<?php

//include('verify_user.php');

$sql = "select * from problem_master p, stream_master s, branch_master b WHERE p.problem_branch=b.branch_id and p.problem_stream = s.stream_id and problem_status ='1'";
$allProblems = array();
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)) {
	array_push($allProblems,$data);
}


echo json_encode($allProblems);

?>