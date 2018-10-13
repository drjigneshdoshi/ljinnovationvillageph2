<?php

include('verify_user.php');

$first_name = ucfirst($_POST['first_name']);
$middle_name = ucfirst($_POST['middle_name']);
$last_name = ucfirst($_POST['last_name']);
$new_email = $_POST['new_email'];
$contact = $_POST['contact'];
$gender = $_POST['gender'];
$old_password = md5($_POST['old_password']);

$flag=0;
$flag1=0;
$maxsize    = 307200;
$password = '';

$sql_temp = "SELECT * FROM `user_master` WHERE `email` = '$email'";
$res_temp = mysqli_query($connect,$sql_temp);
$data1 = mysqli_fetch_assoc($res_temp);

$password1 = $data1['passwd'];

$sql_temp = "SELECT * FROM `student_master` s,user_master u WHERE s.user_id = u.user_id and  email='$email'";
$res_temp_stud = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp_stud);

$user_id = $data['user_id']; 
$student_id = $data['student_id']; 

$user = $admin_row['user_id'];
$sql_temp = "SELECT * FROM `user_master` WHERE (`email` = '$new_email' or `contact` = '$contact') AND `user_id` != $user";
$res_temp = mysqli_query($connect,$sql_temp);
$data = mysqli_fetch_assoc($res_temp);

if(empty($_POST['old_password']))
{
    $response['success']=false;
    $response['error_message']="Please Enter Old Password";
    echo json_encode($response);
    die();
}
else if($old_password!=$password1)
{
    $response['success']=false;
    $response['error_message']="Old Password Is Invalid";
    echo json_encode($response);
    die();
}
else if(strlen($first_name)<3 )
{
    $response['success']=false;
    $response['error_message']="First Name Should Be Atleast 3 Characters Long with no spaces/special characters allowed";
    echo json_encode($response);
    die();
}
else if(strlen($last_name)<3)
{
    $response['success']=false;
    $response['error_message']="Last Name Should Be Atleast 3 Characters Long with no spaces/special characters allowed";
    echo json_encode($response);
    die();
}

else if($data!=null)
{
    $response['success']=false;
    $response['error_message']="Email or Contact Already Exits";
    echo json_encode($response);
    die();
}
else if(strlen($contact)!=10)
{
    $response['success']=false;
    $response['error_message']="Contact Number Should Be of 10 Digits";
    echo json_encode($response);
    die();
}
else 
{
    if(empty($_POST['password']))
    {
        $sql_temp = "UPDATE `user_master` SET `email`='$new_email',`contact`='$contact',`user_type`='Student',`user_status`= '1' WHERE `user_id` = $user_id ";
        
        $res_temp = mysqli_query($connect,$sql_temp);
    }
    else
    {
        if(strlen($_POST['password'])<8)
        {
            $response['success']=false;
            $response['error_message']="Password Should Be Atleast 8 Characters Long";
            echo json_encode($response);
            die();
        }
        else
        {
            $password = md5($_POST['password']);   
            $sql_temp = "UPDATE `user_master` SET `email`='$new_email',`contact`='$contact',`passwd`='$password',`user_type`='Student',`user_status`= '1' WHERE `user_id` = $user_id ";
            
            $res_temp = mysqli_query($connect,$sql_temp);
            $flag=1;
        }
    }
   

    if(empty($_FILES['photo']['name']))
    {
        
        $sql_temp = "UPDATE `student_master` SET `first_name`='$first_name',`middle_name`='$middle_name',`last_name`='$last_name',`gender`='$gender' WHERE student_id=$student_id";
        // echo $sql_temp;
        $res_temp = mysqli_query($connect,$sql_temp);
        // $flag1=1;
    }
    else
    {
        $photo = $_FILES['photo']['name'];
        $imageFileType = pathinfo($photo,PATHINFO_EXTENSION);
    
        if($imageFileType != "jpg" && $imageFileType != "jpeg"  && $imageFileType != "JPG" && $imageFileType != "JPEG")
        {
            $response['success']=false;
            $response['error_message']="Only JPG, JPEG files are allowed.";
            echo json_encode($response);
            die();
        }
        else if($_FILES['photo']['size'] > $maxsize) 
        {
            $response['success']=false;
            $response['error_message']="File Size Should Be Less Than 300KB";
            echo json_encode($response);
            die();
        }
        else
        {
            $sql_temp = "UPDATE `student_master` SET `first_name`='$first_name',`middle_name`='$middle_name',`last_name`='$last_name',`gender`='$gender',`photo`='$photo' WHERE student_id=$student_id";
            
            $res_temp = mysqli_query($connect,$sql_temp);
            // $flag1=1;
    
            $foldername = "images/student/$student_id/";
            
            move_uploaded_file($_FILES['photo']['tmp_name'],$foldername.$photo);
            
        } 
    } 
}

if($flag==1)
{
    $credentials = md5($new_email.":".$password);
}

$response['success']=true;
$response['email']=$admin_row['email'];
$response['first_name']=$_POST['first_name'];
$response['last_name']=$_POST['last_name'];
$response['user_type']=$admin_row['user_type'];
$response['credentials']=$credentials;

echo json_encode($response);
?>