<?php

include('verify_user.php');
include('branch_mapping.php');

$email  = $_POST['email'];
$problem_title = strtoupper($_POST['Problem_title']);
$problem_abstract = str_replace("'","",$_POST['problem_abstract']);
$problem_stream = $_POST['problem_stream'];
$problem_branch = $_POST['problem_branch'];
//$problem_description = $_POST['problem_description'];
$problem_applications = $_POST['problem_applications'];
$problem_desired_outcome = $_POST['problem_desired_outcome'];
$problem_tools = $_POST['problem_tools'];

$problem_tentative_workflow = $_POST['problem_tentative_workflow'];
$problem_boundary_conditions = $_POST['problem_boundary_conditions'];

$maxsize_pdf    = 2097152;
$problem_report_file = $_FILES['problem_report_file']['name'];
$reportFileType = pathinfo($problem_report_file,PATHINFO_EXTENSION);

$sqltmp="SELECT * FROM `problem_master` where  `problem_title` = '$problem_title' ";
$res_temp = mysqli_query($connect,$sqltmp);
$data = mysqli_fetch_assoc($res_temp);

if($data!=null)
{
    $response['success']=false;
    $response['error_message']="Title is Already Exits";
}
else if(!empty($problem_report_file) && ($reportFileType != "pdf" && $reportFileType != "PDF"))
{
    $response['success']=false;
    $response['error_message']="Only Pdf files are allowed in Report.";
}
else if(!empty($problem_report_file) && (($_FILES['problem_report_file']['size'] > $maxsize_pdf) || ($_FILES["problem_report_file"]["size"] == 0))) 
{
    $response['success']=false;
    $response['error_message']="Pdf File Size Should Be Less Than 2MB";
}
else
{    
    $sql_temp = "INSERT INTO `problem_master`(`problem_title`, `problem_abstract`, `problem_stream`, `problem_branch`, `problem_status`, `file_name`,`problem_applications`, `problem_desired_outcome`,`problem_tools`,`problem_boundary_conditions`,`problem_tentative_workflow`,`created_by_emailid`) VALUES ('$problem_title','$problem_abstract','$problem_stream','$problem_branch','0','$problem_report_file','$problem_applications','$problem_desired_outcome','$problem_tools','$problem_boundary_conditions','$problem_tentative_workflow','$email')";
    
    $res_temp = mysqli_query($connect,$sql_temp);

	if ( !$res_temp) {
		$response['success']=false;
        //$response['error_message']= echo $problem_title,$problem_abstract,$problem_stream,$problem_branch,$problem_report_file;
        $response['error_message']= "Data Not Inserted";
	}
	else {
    $sql_temp = "SELECT * from `problem_master` where `problem_title` = '$problem_title'";
    $res_temp = mysqli_query($connect,$sql_temp);
    $data = mysqli_fetch_assoc($res_temp);
    $problem_id = $data['problem_id'];

    $problem_report_file = $_FILES['problem_report_file']['name'];
    $problem_report_file=explode('.',$problem_report_file);
    $fileactualExt=strtolower(end($problem_report_file));
    $filenameNew= $problem_id."problem.pdf";
    $fileDestination='pdf/problems/'.$filenameNew;
    

    $problem_id = $data['problem_id']; 
    $sql_temp = "UPDATE `problem_master` SET `file_name`='$filenameNew' WHERE problem_id = $problem_id";
    $res_temp = mysqli_query($connect,$sql_temp);

    
    //mkdir($foldername);
	if(!empty($problem_report_file)){
        //move_uploaded_file($_FILES['problem_report_file']['tmp_name'],$foldername.$problem_report_file);
        move_uploaded_file($_FILES['problem_report_file']['tmp_name'], $fileDestination);
    }
    if($res_temp)
    {
       
        $response['success']=true;
       
    }
    else
    {
        $response['success']=false;
        $response['error_message']= "Unable to save Problem due to Data Error";    
    }
	
	}
}
echo json_encode($response);
?>