<?php
include('verify_user.php');

$old_password = md5($_POST['old_password']);
$new_password = md5($_POST['new_password']);

$sql_temp = "SELECT * FROM `user_master` WHERE `email` = '$email'";
$res_temp = mysqli_query($connect,$sql_temp);
$data1 = mysqli_fetch_assoc($res_temp);

$password1 = $data1['passwd'];

if(strlen($_POST['new_password'])<8)
{
    $response['success']=false;
    $response['error_message']="Password Should Be Atleast 8 Characters Long";
}
else if($old_password!=$password1)
{
    $response['success']=false;
    $response['error_message']="Old Password Is Invalid";
}
else
{
    $sql_temp = "UPDATE `user_master` SET `passwd`='$new_password' WHERE `email` = '$email'";
    $res_temp = mysqli_query($connect,$sql_temp);

    if($res_temp)
    {
        $credentials = md5($email.":".$new_password);
        $response['success']=true;
        $response['email']=$admin_row['email'];
        $response['user_type']=$admin_row['user_type'];
        $response['credentials']=$credentials;
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Password Not Changed";    
    }

}
echo json_encode($response);
?>