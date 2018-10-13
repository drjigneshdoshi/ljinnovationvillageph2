<?php

// include('verify_user.php');

if(isset($_GET['admin']))
{
    $sql = "select * from project_master p,project_evaluation pe,mentor_master m,user_master u,stream_master s,branch_master b where m.mentor_id = pe.mentor_id and p.project_id = pe.project_id and m.user_id = u.user_id and p.project_stream = s.stream_id and p.project_branch = b.branch_id and p.project_year = '9999'";
}
else{
    // $sql = '';
    $sql = "select p.*,s.*,b.*,u.email as team_lead_email,u.contact as team_lead_contact,st.first_name as team_lead_first_name,st.last_name as team_lead_last_name from project_master p,stream_master s,student_master st,branch_master b, user_master u where p.project_stream = s.stream_id and p.project_branch = b.branch_id and st.user_id = u.user_id and st.student_id = p.student_id and p.project_year = '9999'";
}
$res = mysqli_query($connect,$sql);
$data = array();

while($row=mysqli_fetch_assoc($res)){
    $pid = $row['project_id'];
    $sql = "SELECT * FROM project_evaluation pe,mentor_master me,user_master u WHERE `project_id` = $pid AND me.mentor_id = pe.mentor_id AND u.user_id = me.user_id";
    $res1 = mysqli_query($connect,$sql);
    $row1=mysqli_fetch_assoc($res1);
   
    if(isset($row1['mark1'])){
        $row['mark1'] = $row1['mark1'];
        $row['mark2'] = $row1['mark2'];
        $row['mark3'] = $row1['mark3'];
        $row['mark4'] = $row1['mark4'];
        $row['mark5'] = $row1['mark5'];
        $row['mentor_id'] = $row1['mentor_id'];
        $row['mentor_name'] = $row1['mentor_name'];
        $row['mentor_email'] = $row1['email'];
        $row['mentor_contact'] = $row1['contact'];
        $avg = ($row['mark1']+$row['mark2']+$row['mark3']+$row['mark4']+$row['mark5'])/5;
        $row['average_rating'] = (int)$avg;
    }
    else{
        $row['mark1'] = 0;
        $row['mark2'] = 0;
        $row['mark3'] = 0;
        $row['mark4'] = 0;
        $row['mark5'] = 0;
        $row['mentor_id'] = 0;
        $row['mentor_name'] = "";
        $row['mentor_email'] = "";
        $row['mentor_contact'] = "";
        $row['average_rating'] = 0;
    }
    if(isset($_GET['admin']))
    {
        $avg = ($row['mark1']+$row['mark2']+$row['mark3']+$row['mark4']+$row['mark5'])/5;
        $row['average_rating'] = (int)$avg;
    }
    array_push($data,$row);
}

echo json_encode($data);

?>