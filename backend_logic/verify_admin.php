
<?php

if($admin_row['user_type']!='Admin')
{
    $response['success']=false;
    $response['error_message']= "Invalid Credentials";
    echo json_encode($response);
    die();
}

?>