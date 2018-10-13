<?php

include('verify_user.php');
include('branch_mapping.php');

$project_id = $_POST['project_id'];
$project_title = strtoupper($_POST['project_title']);
$project_category = $_POST['project_category'];
$project_stream = $_POST['project_stream'];
$project_branch = $_POST['project_branch'];
$institute_name = $_POST['institute_name'];
$institute_state = $_POST['institute_state'];
$institute_city = $_POST['institute_city'];
$team_size = $_POST['team_size'];
$team_member_names = $_POST['team_member_names'];
$guide_name = $_POST['guide_name'];
$guide_email = $_POST['guide_email'];
$guide_contact = $_POST['guide_contact'];
$co_guide_name = $_POST['co_guide_name'];
$co_guide_email = $_POST['co_guide_email'];
$co_guide_contact = $_POST['co_guide_contact'];
$funding_flag = $_POST['funding_flag'];


$background_of_inventor = str_replace("'","",$_POST['background_of_inventor']);
$project_abstract = str_replace("'","",$_POST['project_abstract']);
$project_uniqueness = str_replace("'","",$_POST['project_uniqueness']);
$project_problem_definition = str_replace("'","",$_POST['project_problem_definition']);
$project_market_potential = str_replace("'","",$_POST['project_market_potential']);
$project_potential_impact = str_replace("'","",$_POST['project_potential_impact']);
$project_scope_resource_requirement = str_replace("'","",$_POST['project_scope_resource_requirement']);

//$background_of_inventor = $_POST['background_of_inventor'];
//$project_abstract = $_POST['project_abstract'];
//$project_uniqueness = $_POST['project_uniqueness'];
//$project_problem_definition = $_POST['project_problem_definition'];
//$project_market_potential = $_POST['project_market_potential'];
//$project_potential_impact = $_POST['project_potential_impact'];
//$project_scope_resource_requirement = $_POST['project_scope_resource_requirement'];

$project_video = $_POST['video'];

$report = $_FILES['project_report_file']['tmp_name'];
$image = $_FILES['image']['tmp_name'];

$group_id = getBranchCode($project_branch).$project_id;


if(!empty($_POST['guide_name']) and !empty($_POST['guide_email']) and !empty($_POST['guide_contact']))
{
    $guide_name = $_POST['guide_name'];
    $guide_email = $_POST['guide_email'];
    $guide_contact = $_POST['guide_contact'];
    if(strlen($guide_contact)!=10)
    {
        $response['success']=false;
        $response['error_message']="Guide Contact Number Should Be of 10 Digits";
    }
}
else if(rtrim($_POST['guide_name'])=='' and rtrim($_POST['guide_email'])=='' and rtrim($_POST['guide_contact'])=='')
{
    $guide_name = '';
    $guide_email = '';
    $guide_contact = 0;
}
else
{
    if($_POST['guide_name']=='' or $_POST['guide_email']=='' or $_POST['guide_contact']=='')
    {
        $response['success']=false;
        $response['error_message']="Please Fill All Guide Details";
    }
    echo json_encode($response);
    die();
}



if(!empty($_POST['co_guide_name']) and !empty($_POST['co_guide_email']) and !empty($_POST['co_guide_contact']))
{
    $co_guide_name = $_POST['co_guide_name'];
    $co_guide_email = $_POST['co_guide_email'];
    $co_guide_contact = $_POST['co_guide_contact'];
    if(strlen($co_guide_contact)!=10)
    {
        $response['success']=false;
        $response['error_message']="Co-guide Contact Number Should Be of 10 Digits";
    }
}
else if(rtrim($_POST['co_guide_name'])=='' and rtrim($_POST['co_guide_email'])=='' and rtrim($_POST['co_guide_contact'])=='')
{
    $co_guide_name = '';
    $co_guide_email = '';
    $co_guide_contact = 0;
}
else
{
    if($_POST['co_guide_name']=='' or $_POST['co_guide_email']=='' or $_POST['co_guide_contact']=='')
    {
        $response['success']=false;
        $response['error_message']="Please Fill All Co-guide Details";
    }
    echo json_encode($response);
    die();
}


    $sql_temp = "select project_image,project_report_file from project_master where project_id = $project_id";
    
    $res_temp = mysqli_query($connect,$sql_temp);
    
    $row = mysqli_fetch_assoc($res_temp);
    
    if(empty($_FILES['image']['name']) && empty($_FILES['project_report_file']['name']))
    {
        $old_image = $row['project_image'];
        $old_report_file = $row['project_report_file'];
    }
    else if(empty($_FILES['image']['name']))
    {
        $old_report_file = $_FILES['project_report_file']['name'];
        $old_image = $row['project_image'];
        $foldername = "images/project/$project_id/";
        move_uploaded_file($report,$foldername.$old_report_file);
    }
    else if(empty($_FILES['project_report_file']['name']))
    {
        $old_report_file =  $_FILES['image']['name'];
        $old_image = $row['project_image'];
        $foldername = "images/project/$project_id/";
        move_uploaded_file($image,$foldername.$old_image);
    }
    else
    {
        $old_image = $_FILES['image']['name'];
        $old_report_file = $_FILES['project_report_file']['name'];
        $foldername = "images/project/$project_id/";
        move_uploaded_file($image,$foldername.$old_image);
        move_uploaded_file($report,$foldername.$old_report_file);
    }

    $team_members = explode(",",$team_member_names);
    //$team_size = sizeof($team_members);
    //$sql_temp = "UPDATE `project_master` SET `group_id`='$group_id',`project_title`= '$project_title',`project_category`='$project_category',`project_stream`= $project_stream,`project_branch`= $project_branch,`institute_name`='$institute_name',`institute_state`='$institute_state',`institute_city`='$institute_city',`team_size`='$team_size',`team_member_names`='$team_member_names',`guide_name`='$guide_name',`guide_email`='$guide_email',`guide_contact`='$guide_contact',`co_guide_name`='$co_guide_name',`co_guide_email`='$co_guide_email',`co_guide_contact`='$co_guide_contact',`background_of_inventor`='$background_of_inventor',`project_abstract`='$project_abstract',`project_uniqueness`='$project_uniqueness',`project_problem_definition`='$project_problem_definition',`project_market_potential`='$project_market_potential',`project_potential_impact`='$project_potential_impact',`porject_scope_resource_requirement`='$project_scope_resource_requirement',`project_video`='$project_video', project_image = '$old_image' , project_report_file = '$old_report_file' WHERE project_id = '$project_id'";

	$sql_temp = "UPDATE `project_master` SET `group_id`='$group_id',`project_title`= '$project_title',`project_category`='$project_category',`project_stream`= $project_stream,`project_branch`= $project_branch,`institute_name`='$institute_name',`institute_state`='$institute_state',`institute_city`='$institute_city',`team_size`='$team_size',`team_member_names`=SUBSTRING_INDEX('$team_member_names', ',', '$team_size'),`guide_name`='$guide_name',`guide_email`='$guide_email',`guide_contact`='$guide_contact',`co_guide_name`='$co_guide_name',`co_guide_email`='$co_guide_email',`co_guide_contact`='$co_guide_contact',`background_of_inventor`='$background_of_inventor',`project_abstract`='$project_abstract',`project_uniqueness`='$project_uniqueness',`project_problem_definition`='$project_problem_definition',`project_market_potential`='$project_market_potential',`project_potential_impact`='$project_potential_impact',`porject_scope_resource_requirement`='$project_scope_resource_requirement',`project_video`='$project_video', project_image = '$old_image' , project_report_file = '$old_report_file',funding_flag='$funding_flag' WHERE project_id = '$project_id'";
    //print_r($sql_temp);
	//exit();
	
    $res_temp = mysqli_query($connect,$sql_temp);
    
   
    if($res_temp)
    {
        $response['success']=true;
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Data Not Updated";    
    }

	
	
	
echo json_encode($response);
?>