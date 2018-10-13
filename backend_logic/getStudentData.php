<?php

include('verify_user.php');

$email  = $_GET['email'];

$sql = "select * from student_master s,user_master u where s.user_id = u.user_id and email='$email'";
$res = mysqli_query($connect,$sql);

$row=mysqli_fetch_assoc($res);

echo json_encode($row);

?>
