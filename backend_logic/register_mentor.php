<?php

$first_name = ucfirst($_POST['first_name']);
//$middle_name = ucfirst($_POST['middle_name']);
//$last_name = ucfirst($_POST['last_name']);
$stream = $_POST['project_stream'];
$branch = $_POST['project_branch'];
$email = $_POST['mentor_email'];
$contact = $_POST['contact'];
$gender = $_POST['gender'];
$photo = $_FILES['photo']['name'];
$password = md5($_POST['password']);
$organization_name = $_POST['organization_name'];
$specialization_name = $_POST['specialization_name'];

$date = date("Y-m-d H:i:s");

$maxsize    = 307200;

$imageFileType = pathinfo($photo,PATHINFO_EXTENSION);

$sql_temp = "SELECT * FROM `user_master` WHERE `email` = '$email' or `contact` = '$contact'";
$res_temp = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp);

if($data!=null)
{
    $response['success']=false;
    $response['error_message']="Email or Contact Already Exists";
}
else if(strlen($first_name)<3)
{
    $response['success']=false;
    $response['error_message']="First Name Should Be Atleast 3 Characters Long with no spaces/special characters allowed";
}
else if(strlen($contact)!=10)
{
    $response['success']=false;
    $response['error_message']="Contact Number Should Be of 10 Digits";
}
else if(strlen($_POST['password'])<8)
{
    $response['success']=false;
    $response['error_message']="Password Should Be Atleast 8 Characters Long";
}
else if($imageFileType != "jpg" && $imageFileType != "jpeg"  && $imageFileType != "JPG" && $imageFileType != "JPEG")
 {
   $response['success']=false;    $response['error_message']="Only JPG, JPEG files are allowed.";
}
else if(($_FILES['photo']['size'] > $maxsize) ) 
{
    $response['success']=false;
    $response['error_message']="File Size Should Be Less Than 300KB";
}
else if(($_FILES["photo"]["size"] == 0)) 
{
    $response['success']=false;
    $response['error_message']="File Size Can not Be Zero";
}
else{
    $sql_temp = "INSERT INTO `user_master`(`email`, `contact`, `passwd`, `user_type`, `user_status`, `created_at`) VALUES ('$email',$contact,'$password','Mentor','1','$date')";
    $res_temp = mysqli_query($connect,$sql_temp);
    
    $sql_temp = "SELECT * FROM `user_master` WHERE `email` = '$email'";
    $res_temp = mysqli_query($connect,$sql_temp);
    $data = mysqli_fetch_assoc($res_temp);
    
    $user_id = $data['user_id']; 

   
    
    
    $sql_temp = "INSERT INTO `mentor_master`(`user_id`, `mentor_name`,`mentor_type`, `gender`,`stream`,`branch`, `photo`,`organization_name`,`specialization_name`) VALUES ($user_id,'$first_name','Industry','$gender','$stream','$branch','$photo','$organization_name','$specialization_name')";
    $res_temp = mysqli_query($connect,$sql_temp);

    $sql_temp = "SELECT * FROM user_master u,mentor_master m where u.user_id = m.user_id and u.email='$email'";
    $res_temp = mysqli_query($connect,$sql_temp);
    $data = mysqli_fetch_assoc($res_temp);
    
    $mentor_id = $data['mentor_id']; 

    $foldername = "images/mentors/$mentor_id/";
    
    mkdir($foldername);
    
    
    move_uploaded_file($_FILES['photo']['tmp_name'],$foldername.$photo);
    if($res_temp)
    {
        $response['success']=true;
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Data not Added";    
    }
    
}
echo json_encode($response);
?>