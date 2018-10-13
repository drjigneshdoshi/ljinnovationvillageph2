<?php

include('backend_logic/connection.php');

if(isset($_REQUEST['register_student']))
    include('backend_logic/register_student.php');
else if(isset($_REQUEST['login']))
    include('backend_logic/login.php');
else if(isset($_REQUEST['get_student_data']))
    include('backend_logic/getStudentData.php');
else if(isset($_REQUEST['edit_profile_student']))
    include('backend_logic/edit_profile_student.php');
else if(isset($_REQUEST['register_project']))
    include('backend_logic/register_project.php');
else if(isset($_REQUEST['get_project_data']))
    include('backend_logic/get_project_data.php');
else if(isset($_REQUEST['edit_project']))
    include('backend_logic/edit_project_student.php');
else if(isset($_REQUEST['get_mentor_data']))
    include('backend_logic/get_mentor_data.php');
else if(isset($_REQUEST['get_project_details']))
    include('backend_logic/get_project_details.php');
else if(isset($_REQUEST['project_allocate']))
    include('backend_logic/project_allocate.php');
else if(isset($_REQUEST['remove_project_allocation']))
    include('backend_logic/remove_project_allocation.php');
else if(isset($_REQUEST['get_allocated_projects']))
    include('backend_logic/get_allocated_projects.php');
else if(isset($_REQUEST['get_projects_mentor']))
    include('backend_logic/get_projects_mentor.php');
else if(isset($_REQUEST['get_problems_mentor']))
    include('backend_logic/get_problems_mentor.php');
else if(isset($_REQUEST['evaluate_project']))
    include('backend_logic/evaluate_project.php');
else if(isset($_REQUEST['get_stream_branch_data']))
    include('backend_logic/get_stream_branch_data.php');
else if(isset($_REQUEST['get_project_states_data']))
    include('backend_logic/get_project_states.php');
else if(isset($_REQUEST['get_project_inst_data']))
    include('backend_logic/get_project_inst.php');
else if(isset($_REQUEST['get_all_projects']))
    include('backend_logic/get_all_projects.php');
else if(isset($_REQUEST['change_password']))
    include('backend_logic/change_password.php');
else if(isset($_REQUEST['project_selection_toggle']))
    include('backend_logic/project_selection_toggle.php');
else if(isset($_REQUEST['forgot_password']))
    include('backend_logic/forgot_password.php');
else if(isset($_REQUEST['registerProblem']))
    include('backend_logic/register_problem.php');
else if(isset($_REQUEST['edit_Problem']))
    include('backend_logic/edit_problem.php');
else if(isset($_REQUEST['get_projects_count']))
    include('backend_logic/get_projects_count.php');
else if(isset($_REQUEST['get_project_stream_branch_data']))
    include('backend_logic/get_project_stream_branch_data.php');
else if(isset($_REQUEST['get_proj_prob_stream_branch_data']))
    include('backend_logic/get_proj_prob_stream_branch_data.php');
else if(isset($_REQUEST['get_all_stream_data']))
    include('backend_logic/get_all_streams.php');
else if(isset($_REQUEST['registerStream']))
    include('backend_logic/insert_stream.php');
else if(isset($_REQUEST['get_stream_data']))
    include('backend_logic/get_stream_data.php');
else if(isset($_REQUEST['edit_Stream']))
    include('backend_logic/edit_stream.php');
else if(isset($_REQUEST['registerBranch']))
    include('backend_logic/insert_branch.php');
else if(isset($_REQUEST['get_all_branch_data']))
    include('backend_logic/get_all_branches.php');
else if(isset($_REQUEST['edit_branch']))
    include('backend_logic/edit_branch.php');
else if(isset($_REQUEST['get_branch_data']))
    include('backend_logic/get_branch_data.php');
else if(isset($_REQUEST['get_edit_problem_data']))
    include('backend_logic/get_problem_data.php');
else if(isset($_REQUEST['get_all_problems']))
    include('backend_logic/get_all_problems.php');
else if(isset($_REQUEST['get_display_problem_data']))
    include('backend_logic/get_display_problem_data.php');
else if(isset($_REQUEST['get_mentor_stream_branch_data']))
    include('backend_logic/get_mentor_stream_branch_data.php');
else if(isset($_REQUEST['registerMentor']))
    include('backend_logic/register_mentor.php');
else if(isset($_REQUEST['register_Mentor']))
    include('backend_logic/register_mentor.php');
else if(isset($_REQUEST['modifyProblem']))
    include('backend_logic/modify_problem.php');
else if(isset($_REQUEST['get_registeredprojects_mentor']))
    include('backend_logic/get_registered_projects_mentor.php');
else if(isset($_REQUEST['problem_selection_toggle']))
    include('backend_logic/problem_selection_toggle.php');
else if(isset($_REQUEST['get_all_problems_admin']))
    include('backend_logic/get_all_problems_admin.php');
else if(isset($_REQUEST['mentor_selection_toggle']))
    include('backend_logic/mentor_selection_toggle.php');
else if(isset($_REQUEST['get_project_year_data']))
    include('backend_logic/get_project_year.php');
else if(isset($_REQUEST['get_editproject_data']))
    include('backend_logic/get_editproject_data.php');
else if(isset($_REQUEST['get_prob_stream_branch_data']))
    include('backend_logic/get_prob_stream_branch_data.php');
else if(isset($_REQUEST['get_lastyr_project_details']))
    include('backend_logic/get_lastyr_project_details.php');
else if(isset($_REQUEST['get_all_institute_data']))
    include('backend_logic/get_all_institutes.php');
else if(isset($_REQUEST['registerInstitute']))
    include('backend_logic/insert_institute.php');
else if(isset($_REQUEST['get_institute_data']))
    include('backend_logic/get_institute_data.php');
else if(isset($_REQUEST['edit_Institute']))
    include('backend_logic/edit_institute.php');
	
	

?>