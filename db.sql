create table user_master(
    user_id int primary key auto_increment,
    email varchar(100) unique not null,
    contact bigint unique not null,
    passwd varchar(50) not null,
    user_type enum('Admin','Student','Mentor'),
    user_status enum('1','0'),
    created_at timestamp
);

create table student_master(
    student_id int primary key auto_increment,
    user_id int references user_master(user_id),
    first_name varchar(30) not null,
    middle_name varchar(30),
    last_name varchar(30) not null,
    gender enum('Male','Female'),
    photo varchar(70) not null
);

create table project_master(
    project_id int primary key auto_increment,
    student_id int references student_master(student_id),
    group_id varchar(20) not null,
    project_title varchar(100) not null,
    project_category enum('Proof of Concept','Prototype','Product','Start Up'),
    project_stream int references stream_master(stream_id),
    project_branch int references branch_master(branch_id),
    institute_name varchar(100) not null,
    institute_state varchar(30) not null,
    institute_city varchar(30) not null,
    team_size enum('1','2','3','4','5','6','7','8','9'),
    team_member_names varchar(550) not null,
    guide_name varchar(50),
    guide_email varchar(255),
    guide_contact bigint,
    co_guide_name varchar(50),
    co_guide_email varchar(255),
    co_guide_contact bigint,
    background_of_inventor varchar(500) not null,
    project_abstract varchar(500) not null,
    project_uniqueness varchar(500) not null,
    project_problem_definition varchar(500) not null,
    project_market_potential varchar(500) not null,
    project_potential_impact varchar(500) not null,
    porject_scope_resource_requirement varchar(500) not null,
    project_image varchar(50) not null,
    project_video varchar(50),
    project_report_file varchar(50) not null,
    project_selected enum('0','1')
);

create table mentor_master(
    mentor_id int primary key auto_increment,
    user_id int references user_master(user_id),
    mentor_type enum('Technical Academic','Financial Marketing','Design' ,'Industry'), 
    mentor_name varchar(50) not null,
    gender enum('Male','Female'),
    stream int references stream_master(stream_id),
    branch int references branch_master(branch_id),
    photo varchar(70) not null,
    organization_name varchar(50) not null,
    specialization_name varchar(50) not null
);

create table project_evaluation(
    project_id int references project_master(project_id),
    mentor_id int references mentor_master(mentor_id),
    mark1 int not null,
    mark2 int not null,
    mark3 int not null,
    mark4 int not null,
    mark5 int not null,
    created_at timestamp,
    updated_at timestamp
);

create table stream_master(
    stream_id int primary key auto_increment,
    stream_name varchar(100) not null
);

create table branch_master(
    branch_id int primary key auto_increment,
    branch_name varchar(100) not null
);

INSERT INTO `branch_master` (`branch_id`, `branch_name`) VALUES
(1, 'Mechanical Engineering'),
(2, 'Manufacturing Engineering'),
(3, 'Automobile Engineering'),
(4, 'Electrical Engineering'),
(5, 'Electronics and Communication Engineering'),
(6, 'Instrumentation and Control Engineering'),
(7, 'Civil Engineering'),
(8, 'Architecture'),
(9, 'Computer Engineering'),
(10, 'Information Technology'),
(11, 'Information and Communications Technology'),
(12, 'Master of Computer Applications'),
(13, 'Pharmacy'),
(14, 'Applied Sciences'),
(15, 'Inter Disciplinary'),
(16, 'Others');


INSERT INTO `stream_master` (`stream_id`, `stream_name`) VALUES
(1, 'Diploma Engineering'),
(2, 'Degree Engineering  (UG/PG)'),
(3, 'Master of Computer Applications'),
(4, 'Pharmacy  (UG/PG)'),
(5, 'Applied Sciences  (UG/PG)'),
(6, 'Architecture  (UG/PG)'),
(7, 'Others');


INSERT INTO `user_master` (`user_id`, `email`, `contact`, `passwd`, `user_type`, `user_status`, `created_at`) VALUES
(10, 'nikunj@dataone.io', 9016211300, '123', 'Mentor', '1', NULL),
(9, '', 9925833113, '123', 'Mentor', '1', NULL),
(8, 'mahanta.chinmay@gmail.com', 9662325558, '123', 'Mentor', '1', NULL),
(7, 'shahnikhil@yahoo.com', 9998822287, '123', 'Mentor', '1', NULL),
(6, 'archit@strawberrygroup.com', 7405828599, '123', 'Mentor', '1', NULL),
(11, 'shaunak@asepl.in', 9824034849, '123', 'Mentor', '1', NULL),
(12, 'Indravadan', 9428045998, '123', 'Mentor', '1', NULL),
(13, 'hemant.microcut@gmail.com', 9825044095, '123', 'Mentor', '1', NULL),
(14, 'ashishsbhaat@yahoo.com', 9712984514, '123', 'Mentor', '1', NULL),
(15, 'narenvadher@ljinstitutes.edu.in', 9824027720, '123', 'Mentor', '1', NULL),
(16, 'prakash', 123, '123', 'Mentor', '1', NULL);


INSERT INTO `mentor_master` (`mentor_id`, `user_id`, `mentor_type`, `mentor_name`, `gender`, `stream`, `branch`, `photo`, `organization_name`, `specialization_name`) VALUES
(1, 6, 'Industry', 'Archit Somani', 'Male', 2, 4, '', 'Strawberry R&D Labs', 'IoT / Image processing'),
(2, 7, 'Industry', 'Nikhil Shah', 'Male', 2, 10, '', 'IoT Data systems', 'IoT & Cloud computing'),
(3, 8, 'Industry', 'Chinmay Mahanta', 'Male', 2, 3, '', 'Tata motors', 'Automobile Design'),
(4, 9, 'Technical Academic', 'Pritesh Bhatia', 'Male', 2, 1, '', 'GLS Design school', 'product design'),
(5, 10, 'Industry', 'Nikunj Thakkar', 'Male', 2, 9, '', 'Dataone Innovations labs pvt ltd', 'Cloud computing '),
(6, 11, 'Industry', 'Shaunak Shah', 'Male', 2, 5, '', 'Automation System Engineers Pvt Ltd', 'Circuit design'),
(7, 12, 'Industry', 'Indravadan Gajjar', 'Male', 2, 1, '', 'consultant', 'Robotic solutions'),
(8, 13, 'Industry', 'Hemant Desai', 'Male', 2, 1, '', 'microcut technics', 'Mechanical tools & Manufacturing'),
(9, 14, 'Industry', 'Ashish Bhatt', 'Male', 2, 3, '', 'ford motors', 'Automobile Design'),
(10, 15, 'Industry', 'Naren Vadher', 'Male', 2, 1, '', 'VACUNAIR ENGINEERING CO PVT LTD', 'Machine Design'),
(11, 16, 'Design', 'Prakash vani', 'Male', 2, 1, '', 'platypus designs pvt ltd', 'product design');