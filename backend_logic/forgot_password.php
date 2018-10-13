<?php

$email = $_POST['email'];

function random_password( $length = 8 ) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+;:,.?";
    $password = substr( str_shuffle( $chars ), 0, $length );
    return $password;
    
}

$sql_email = "select * from  user_master where email='$email'";
$res_email=$connect->query($sql_email);
$row_email=$res_email->fetch_array();

if($row_email['email'] == $email)
{
    $password = random_password(8);
    $new_password = md5($password);
    
    $sql_temp = "UPDATE `user_master` SET `passwd`='$new_password' WHERE `email` = '$email'";
    $res_temp = mysqli_query($connect,$sql_temp);
    
    if($res_temp)
    {
        $to=$email;
        $subject="Password Reset LJ Innovation Village";
        $header="From: LJ Innovation Village <admin@ljinnovationvillage.org>";
        
        $message="Your New Password Is: \n";
        $message.="Password :".$password;
        
        $sentmail = mail($to,$subject,$message,$header);
    }
   
    if($sentmail)
    {
        $response['success']=true;
        $response['message']= "New Password Sent To Your Email Address";  
    }
    else 
    {
        $response['success']=false;
        $response['error_message']= "Email Not Sent";  
    }
}
else
{
    $response['success']=false;
    $response['error_message']= "Email Not Found";    
}
echo json_encode($response);
?>