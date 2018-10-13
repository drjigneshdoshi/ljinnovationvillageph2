<?php 
    include('verify_user.php');
    include('verify_admin.php');

   
    $mentor_id = $_REQUEST['mentor_id'];
    $projects = $_REQUEST['projects'];
    $date = date("Y-m-d H:i:s");
    for($i=0;$i<count($projects);$i++)
    {

        $sql_temp = "INSERT INTO `project_evaluation`(`project_id`, `mentor_id`, `mark1`, `mark2`, `mark3`, `mark4`, `mark5`, `created_at`) VALUES ($projects[$i],$mentor_id,0,0,0,0,0,'$date')";

        $res_temp = mysqli_query($connect,$sql_temp);

        if($res_temp==true)
        {
            $flag=1;
        }  
    }    

    if($flag==1)
    {
        
        $response['success']=true;
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Project Not Allocated";    
    }
    echo json_encode($response);
?>