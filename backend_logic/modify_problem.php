<?php 

include('verify_user.php');
include('branch_mapping.php');

$problem_id = $_POST['problem_id']; 

$problem_title = strtoupper($_POST['Problem_title']);
$problem_abstract = str_replace("'","",$_POST['problem_abstract']);
//$problem_description = $_POST['problem_description'];
$problem_applications = $_POST['problem_applications'];
$problem_desired_outcome = $_POST['problem_desired_outcome'];
$problem_tools = $_POST['problem_tools'];
$problem_tentative_workflow = $_POST['problem_tentative_workflow'];
$problem_boundary_conditions = $_POST['problem_boundary_conditions'];

$problem_stream = $_POST['problem_stream'];
$problem_branch = $_POST['problem_branch'];


//$sql_temp = "UPDATE `problem_master` SET `problem_title`='$problem_title', `problem_abstract`='$problem_abstract',`problem_applications`='$problem_applications',`problem_desired_outcome`='$problem_desired_outcome',`problem_tools`='$problem_tools', `problem_tentative_workflow`='$problem_tentative_workflow',`problem_boundary_conditions`='$problem_boundary_conditions' WHERE problem_id = $problem_id";

$sql_temp = "UPDATE `problem_master` SET `problem_title`='$problem_title',`problem_abstract`='$problem_abstract',`problem_applications`='$problem_applications',`problem_desired_outcome`='$problem_desired_outcome',`problem_boundary_conditions`='$problem_boundary_conditions',`problem_tentative_workflow`='$problem_tentative_workflow',`problem_tools`='$problem_tools',`problem_stream`='$problem_stream',`problem_branch`='$problem_branch' WHERE problem_id = $problem_id";


$res_temp = mysqli_query($connect,$sql_temp);
if($res_temp)
    {
            $response['success']=true;       
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Unable to save Problem due to Data Error";    
    }


  
        
    echo json_encode($response);
?>