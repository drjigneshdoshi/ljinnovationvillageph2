<?php

include('verify_user.php');

if(!isset($_POST['Marks1']) or !isset($_POST['Marks2']) or !isset($_POST['Marks3']) or !isset($_POST['Marks4']) or !isset($_POST['Marks5']))
{
    $response['success'] = false;
    $response['error_message'] = "Half Star Is Mandatory For All Paramters!";
    echo json_encode($response);
    die();
}
else{
    $marks1 = $_POST['Marks1'];
    $marks2 = $_POST['Marks2'];
    $marks3 = $_POST['Marks3'];
    $marks4 = $_POST['Marks4'];
    $marks5 = $_POST['Marks5'];
    $project_id = $_POST['project_id'];
    $date = date("Y-m-d H:i:s");
}

$sql_temp = "UPDATE `project_evaluation` SET `mark1`=$marks1,`mark2`=$marks2,`mark3`=$marks3,`mark4`=$marks4,`mark5`=$marks5,`updated_at`= '$date' WHERE `project_id` = $project_id";
$res_temp = mysqli_query($connect,$sql_temp);


if ($res_temp == true) 
{
    
    $response['success'] = true;
} 
else 
{
    $response['success'] = false;
    $response['error_message'] = "Ratings not Added!";
}
echo json_encode($response);
?>