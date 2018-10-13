<?php

$data = array();
$project_count = array();

$sql = "SELECT count(`project_category`) as products from project_master WHERE `project_category` = 'Product' and `project_year` = '9999'";
$res = mysqli_query($connect,$sql);
$row=mysqli_fetch_assoc($res);

$data['products'] = $row['products'];

$sql = "SELECT count(`project_category`) as proof_of_concepts from project_master WHERE `project_category` = 'Proof of Concept' and `project_year` = '9999'";
$res = mysqli_query($connect,$sql);
$row=mysqli_fetch_assoc($res);
$data['proof_of_concepts'] = $row['proof_of_concepts'];

$sql = "SELECT count(`project_category`) as prototypes from project_master WHERE `project_category` = 'Prototype' and `project_year` = '9999'";
$res = mysqli_query($connect,$sql);
$row=mysqli_fetch_assoc($res);
$data['prototypes'] = $row['prototypes'];

$sql = "SELECT count(`project_category`) as startups from project_master WHERE `project_category` = 'Start Up' and `project_year` = '9999'";
$res = mysqli_query($connect,$sql);
$row=mysqli_fetch_assoc($res);
$data['startups'] = $row['startups'];

echo json_encode($data);

?>
