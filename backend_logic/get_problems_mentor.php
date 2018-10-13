<?php

include('verify_user.php');
$email  = $_GET['email'];


//$sql = "select * from problem_master where createdby_emailid='$email'";

$sql = "select * from problem_master where created_by_emailid='$email'";
$allProblems = array();
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)) {
	array_push($allProblems,$data);
}


echo json_encode($allProblems);

?>