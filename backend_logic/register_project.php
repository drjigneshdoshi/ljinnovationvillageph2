<?php

include('verify_user.php');
include('branch_mapping.php');

$project_title = strtoupper($_POST['project_title']);
$project_category = $_POST['project_category'];
$project_stream = $_POST['project_stream'];
$project_branch = $_POST['project_branch'];
$institute_name = $_POST['institute_name'];
$other_institute_name=$_POST['other_institute_name'];

$institute_state = $_POST['institute_state'];
$institute_city = $_POST['institute_city'];
$team_size = $_POST['team_size'];
$team_member_names = '';
$team_email='';
$team_contact='';
$project_problem_id = $_POST['project_problem_id'];
$funding_flag=$_POST['funding_flag'];

$background_of_inventor = str_replace("'","",$_POST['background_of_inventor']);
$project_abstract = str_replace("'","",$_POST['project_abstract']);
$project_uniqueness = str_replace("'","",$_POST['project_uniqueness']);
$project_problem_definition = str_replace("'","",$_POST['project_problem_definition']);
$project_market_potential = str_replace("'","",$_POST['project_market_potential']);
$project_potential_impact = str_replace("'","",$_POST['project_potential_impact']);
$project_scope_resource_requirement = str_replace("'","",$_POST['project_scope_resource_requirement']);

$project_image = $_FILES['image']['name'];
$project_video = $_POST['video'];
$project_report_file = $_FILES['project_report_file']['name'];

$guide_email='';
$guide_name='';
$guide_contact;

$co_guide_email = '';
$co_guide_name='';
$co_guide_contact;
$maxsize_pdf    = 2097152;
$maxsize_image    = 307200;
$reportFileType = pathinfo($project_report_file,PATHINFO_EXTENSION);
$imageFileType = pathinfo($project_image,PATHINFO_EXTENSION);



if(!empty($_POST['other_institute_name']))
	{
		$institute_name=$_POST['other_institute_name'];
//		echo $institute_name."1";
//		echo $_POST['other_institute_name'];
}


$size = (int)$team_size;

for($i=1;$i<=$size;$i++)
{
    $team_member_names .= $_POST['team_member_honorific'.$i]." ".ucfirst($_POST['team_member_first_name'.$i])." ".ucfirst($_POST['team_member_last_name'.$i]).", ";
	$team_email.= $_POST['team_member_email'.$i].", ";
	$team_contact.= $_POST['team_member_contact'.$i].", ";
	
}
$team_member_names = rtrim($team_member_names,", ");
$team_member_emails = rtrim($team_email,", ");
$team_member_contacts = rtrim($team_contact,", ");


if(!empty($_POST['guide_honorific']) and !empty($_POST['guide_first_name']) and !empty($_POST['guide_last_name']) and !empty($_POST['guide_email']) and !empty($_POST['guide_contact']))
{
    $guide_honorific = $_POST['guide_honorific'];
    $guide_first_name = $_POST['guide_first_name'];
    $guide_last_name = $_POST['guide_last_name'];
    $guide_email = $_POST['guide_email'];
    $guide_contact = $_POST['guide_contact'];
    if(strlen($guide_contact)!=10)
    {
        $response['success']=false;
        $response['error_message']="Guide Contact Number Should Be of 10 Digits";
    }

    $guide_name = $guide_honorific." ".$guide_first_name." ".$guide_last_name;
}
else if($_POST['guide_honorific']=='' and $_POST['guide_first_name']=='' and $_POST['guide_last_name']=='' and $_POST['guide_email']=='' and $_POST['guide_contact']=='')
{
    $guide_honorific = '';
    $guide_first_name = '';
    $guide_last_name = '';
    $guide_email = '';
    $guide_contact = 0;
    $guide_name = $guide_honorific.$guide_first_name.$guide_last_name;
}
else
{
    if($_POST['guide_honorific']=='' or $_POST['guide_first_name']=='' or $_POST['guide_last_name']=='' or $_POST['guide_email']=='' or $_POST['guide_contact']=='')
    {
        $response['success']=false;
        $response['error_message']="Please Fill All Guide Details";
    }
    echo json_encode($response);
    die();
}



if(!empty($_POST['co_guide_honorific']) and !empty($_POST['co_guide_first_name']) and !empty($_POST['co_guide_last_name']) and !empty($_POST['co_guide_email']) and !empty($_POST['co_guide_contact']))
{
    $co_guide_honorific = $_POST['co_guide_honorific'];
    $co_guide_first_name = $_POST['co_guide_first_name'];
    $co_guide_last_name = $_POST['co_guide_last_name'];
    $co_guide_email = $_POST['co_guide_email'];
    $co_guide_contact = $_POST['co_guide_contact'];
    if(strlen($co_guide_contact)!=10)
    {
        $response['success']=false;
        $response['error_message']="Co-guide Contact Number Should Be of 10 Digits";
    }

    $co_guide_name = $co_guide_honorific." ".$co_guide_first_name." ".$co_guide_last_name;
}
else if($_POST['co_guide_honorific']=='' and $_POST['co_guide_first_name']=='' and $_POST['co_guide_last_name']=='' and $_POST['co_guide_email']=='' and $_POST['co_guide_contact']=='')
{
    $co_guide_honorific = '';
    $co_guide_first_name = '';
    $co_guide_last_name = '';
    $co_guide_email = '';
    $co_guide_contact = 0;
    $co_guide_name = $co_guide_honorific.$co_guide_first_name.$co_guide_last_name;
}
else
{
    if($_POST['co_guide_honorific']=='' or $_POST['co_guide_first_name']=='' or $_POST['co_guide_last_name']=='' or $_POST['co_guide_email']=='' or $_POST['co_guide_contact']=='')
    {
        $response['success']=false;
        $response['error_message']="Please Fill All Co-guide Details";
    }
    echo json_encode($response);
    die();
}


if(!empty($project_report_file) && ($reportFileType != "pdf" && $reportFileType != "PDF"))
{
    $response['success']=false;
    $response['error_message']="Only Pdf files are allowed in Report.";
}
else if(!empty($project_report_file) && (($_FILES['project_report_file']['size'] > $maxsize_pdf) || ($_FILES["project_report_file"]["size"] == 0))) 
{
    $response['success']=false;
    $response['error_message']="Pdf File Size Should Be Less Than 2MB";
}

else if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "JPG" && $imageFileType != "JPEG")
{
    $response['success']=false;
    $response['error_message']="Only JPG, JPEG files are allowed in Project Image.";
}
else if(($_FILES['image']['size'] > $maxsize_image) || ($_FILES["image"]["size"] == 0)) 
{
    $response['success']=false;
    $response['error_message']="Image File Size Should Be Less Than 300KB";
}
else
{
    $student_email = $admin_row['email'];
    $sql_temp = "select * from student_master s,user_master u where s.user_id = u.user_id and email='$student_email'";
    $res_temp = mysqli_query($connect,$sql_temp);
    $row=mysqli_fetch_assoc($res_temp);
    $student_id = $row['student_id']; 
    
    $sql_temp = "INSERT INTO `project_master`(`student_id`, `group_id`, `project_title`, `project_category`, `project_stream`, `project_branch`, `institute_name`, `institute_state`, `institute_city`, `team_size`, `team_member_names`, `team_member_emails`,`team_member_contacts`, `guide_name`, `guide_email`, `guide_contact`, `co_guide_name`, `co_guide_email`, `co_guide_contact`,`background_of_inventor`, `project_abstract`, `project_uniqueness`, `project_problem_definition`, `project_market_potential`, `project_potential_impact`, `porject_scope_resource_requirement`, `project_image`, `project_video`, `project_report_file`,`project_selected`,`project_problem_id`,`project_year`,`project_flag`,`funding_flag`) VALUES ('$student_id','1','$project_title','$project_category',$project_stream,$project_branch,'$institute_name','$institute_state','$institute_city','$team_size','$team_member_names','$team_member_emails','$team_member_contacts','$guide_name','$guide_email','$guide_contact','$co_guide_name','$co_guide_email',$co_guide_contact,'$background_of_inventor','$project_abstract','$project_uniqueness','$project_problem_definition','$project_market_potential','$project_potential_impact','$project_scope_resource_requirement','$project_image','$project_video','$project_report_file','0','$project_problem_id','9999','1','$funding_flag')";
    
    $res_temp = mysqli_query($connect,$sql_temp);

	if ( !$res_temp) {
		$response['success']=false;
        $response['error_message']= "Data Error while inserting project data";
	
	}
	else {
    $sql_temp = "select * from student_master s,user_master u,project_master p where s.user_id = u.user_id and s.student_id = p.student_id and email='$email' order by p.project_id desc limit 1";
    $res_temp = mysqli_query($connect,$sql_temp);
    $data = mysqli_fetch_assoc($res_temp);
    
    $project_id = $data['project_id']; 
    $group_id = getBranchCode($project_branch).$project_id;
    $student_name=$data['first_name'].' '. $data['middle_name'].' '. $data['last_name'];
    $sql_temp = "UPDATE `project_master` SET `group_id`='$group_id' WHERE project_id = $project_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    $foldername = "images/project/$project_id/";
    
    mkdir($foldername);
    
    move_uploaded_file($_FILES['image']['tmp_name'],$foldername.$project_image);
    
	if(!empty($project_report_file)){
		move_uploaded_file($_FILES['project_report_file']['tmp_name'],$foldername.$project_report_file);
	}
    if($res_temp)
    {
        $student_email = $admin_row['email'];
        $response['success']=true;
		/*
        $to=$student_email;
        $subject="LJ Innovation Village registration";
        $header="From: LJ Innovation Village <admin@ljinnovationvillage.org>";
        
        $message="Dear ".$student_name. "\nThank you for registering your innovation on www.ljinnovationvillage.org. \nWe hereby inform you that all the details that you have uploaded on www.ljinnovationvillage.org will not be disclosed to any professionals/agencies/company without your consent. Only your project title will be displayed on our website. We also assure you that your innovation will not be used for any business activity by L J GROUP OF INSTITUTES. If any investor or entrepreneur is interested in your  project, you will be informed about it by LJ Innovation Village Team. \n\n P.S. This is an electronic message generated automatically by System, please do not reply to this message. \n\n Regards, \n LJ Innovation Village Team \n L J Campus, Ahmedabad \n";
        mail($to,$subject,$message,$header);
		*/
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Unable to save project due to Data Error";    
    }
	
	}
}
echo json_encode($response);
?>