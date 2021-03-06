// <reference path="angular.js"/>

var app = angular
	.module("RoutesModule", ["ngRoute", "ngCookies"])
	.directive('ngConfirmClick', [
		function(){
			return {
				link: function (scope, element, attr) {
					var msg = attr.ngConfirmClick || "Are you sure?";
					var clickAction = attr.confirmedClick;
					element.bind('click',function (event) {
						if ( window.confirm(msg) ) {
							scope.$eval(clickAction)
						}
					});
				}
			};
	}])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "Templates/Home.html",
				controller: "homeController"
			})
			.when("/Home", {
				templateUrl: "Templates/Home.html",
				controller: "homeController"
			})
			.when("/Login", {
				templateUrl: "Templates/Login.html",
				controller: "loginController"
			})
			.when("/Inquiry", {
				templateUrl: "Templates/register_inquiry.html",
				controller: "inquiryController"
			})
			
			.when("/RegisterStudent", {			
				templateUrl: "Templates/register_student.html",
				controller: "registerStudentController"
			})
			.when("/Events/:page", {
				templateUrl: "Templates/Events.html",
				controller: "eventsController"
			})
			.when("/Speeches/:page", {
				templateUrl: "Templates/Speeches.html",
				controller: "speechesController"
			})
			.when("/Projects", {
				templateUrl: "Templates/Project.html",
				controller: "projectController"
			})
			.when("/Mentors", {
				templateUrl: "Templates/Mentors.html",
				controller: "mentorController"
			})
			.when("/Reports", {
				templateUrl: "Templates/Report.html",
				controller: "reportController"
			})
			.when("/Videos", {
				templateUrl: "Templates/Videos.html",
				controller: "videosController"
			})
			.when("/Images", {
				templateUrl: "Templates/Images.html",
				controller: "imagesController"
			})
			.when("/Images/InnovationVillage/:page", {
				templateUrl: "Templates/LJIVImages.html",
				controller: "ljivImagesController"
			})
			.when("/Media", {
				templateUrl: "Templates/Media.html",
				controller: "mediaController"
			})
			.when("/About/:name", {
				templateUrl: "Templates/LJK.html",
				controller: "ljkController"
			})
			.when("/InnovationVillage", {
				templateUrl: "Templates/LJIV.html",
				controller: "ljivController"
			})
			.when("/Schedule", {
				templateUrl: "Templates/Schedule.html",
				controller: "schController"
			})
			.when("/Initiatives/:name", {
				templateUrl: "Templates/Innv.html",
				controller: "innvController"
			})
			.when("/Contact", {
				templateUrl: "Templates/Contact.html",
				controller: "contactController"
			})
			.when("/Admin", {
				templateUrl: "Templates/Admin/Home.html",
				controller: "adminHomeController"
			})
			.when("/Admin/LateRegistration", {
				templateUrl: "Templates/Admin/late_register_student.html",
				controller: "LateregisterStudentController"
			})
			.when("/Admin/Home", {
				templateUrl: "Templates/Admin/Home.html",
				controller: "adminHomeController"
			})
			.when("/Admin/ProjectsAllocated", {
				templateUrl: "Templates/Admin/projects_allocated.html",
				controller: "projectsAllocatedController"
			})
			.when("/Admin/ProjectRanking", {
				templateUrl: "Templates/Admin/ProjectRanking.html",
				controller: "projectRankingController"
			})
			.when("/Admin/Reports", {
				templateUrl: "Templates/Admin/Reports.html",
				controller: "reportsController"
			})
			.when("/Admin/Problems", {
				templateUrl: "Templates/Admin/Problems.html",
				controller: "adminProblemsController"
			})
			.when("/Admin/Booklet", {
				templateUrl: "Templates/Admin/Booklet.html",
				controller: "bookletController"
			})
			.when("/Admin/Masters", {
				templateUrl: "Templates/Admin/Masters.html",
				controller: "manageMastersController"
			})

			.when("/Admin/Mentors", {
				templateUrl: "Templates/Admin/ManageMentors.html",
				controller: "manageMentorController"
			})
			.when("/Admin/registerMentor", {
				templateUrl: "Templates/Admin/register_mentor.html",
				controller: "registerMentorController"
			})
			
			.when("/Admin/Streams", {
				templateUrl: "Templates/Admin/ManageStreams.html",
				controller: "manageStreamsController"
			})
			
			.when("/Admin/AddStream", {
				templateUrl: "Templates/Admin/AddStream.html",
				controller: "addStreamsController"
			})
			.when("/Admin/EditStream/:page", {
				templateUrl: "Templates/Admin/EditStream.html",
				controller: "adminEditStreamController"
			})
			
			.when("/Admin/Branches", {
				templateUrl: "Templates/Admin/ManageBranches.html",
				controller: "manageBranchesController"
			})
			
			.when("/Admin/AddBranch", {
				templateUrl: "Templates/Admin/AddBranch.html",
				controller: "addBranchController"
			})
			
			.when("/Admin/EditBranch/:page", {
				templateUrl: "Templates/Admin/EditBranch.html",
				controller: "adminEditBranchController"
			})

			.when("/Admin/EditProblem", {
				templateUrl: "Templates/Admin/EditProblem.html",
				controller: "adminEPController"
			})
			
			.when("/Admin/EditProblem/:page", {
				templateUrl: "Templates/Admin/displayProblem.html",
				controller: "adminDisplayProblemController"
			})

			.when("/Mentor", {
				templateUrl: "Templates/Mentor/Home.html",
				controller: "mentorHomeController"
			})
			
			.when("/Mentor/Home", {
				templateUrl: "Templates/Mentor/Home.html",
				controller: "mentorHomeController"
			})
			.when("/Mentor/ProjectAllocated", {
				templateUrl: "Templates/Mentor/ProjectAllocated.html",
				controller: "mentorProjectAllocatedController"
			})
			.when("/Mentor/EditProblem", {
				templateUrl: "Templates/Mentor/ManageProblem.html",
				controller: "mentorEPController"
			})
			.when("/Mentor/EditProblem/:page", {
				templateUrl: "Templates/Mentor/EditSingleProblem.html",
				controller: "mentorEditProblemController"
			})
			.when("/Mentor/registerProblem", {
				templateUrl: "Templates/Mentor/register_Problem.html",
				controller: "registerProblemController"
			})
			.when("/Mentor/ChangePassword", {
				templateUrl: "Templates/change_password.html",
				controller: "changePasswordController"
			})
			.when("/Admin/ChangePassword", {
				templateUrl: "Templates/change_password.html",
				controller: "changePasswordController"
			})
			.when("/Student", {
				templateUrl: "Templates/Student/Home.html",
				controller: "studentHomeController"
			})

			.when("/Student/Home", {
				templateUrl: "Templates/Student/Home.html",
				controller: "studentHomeController"
			})
			.when("/Student/Problems", {
				templateUrl: "Templates/Student/Problems.html",
				controller: "problemsController"
			})
			.when("/Student/Problems/:page", {
				templateUrl: "Templates/Student/displayProblem.html",
				controller: "displayProblemController"
			})

			.when("/Student/Profile", {
				templateUrl: "Templates/Student/Profile.html",
				controller: "studentProfileController"
			})
			.when("/Student/Project", {
				templateUrl: "Templates/Student/Project.html",
				controller: "studentProjectController"
			})
			.when("/Student/ManageProject", {
				templateUrl: "Templates/Student/AddProject.html",
				controller: "studentProjectController"
			})
			.when("/Student/EditProject/:page", {
				templateUrl: "Templates/Student/EditProject.html",
				controller: "studentEditProjectController"
			})


			.when("/ErrorPage", {
				templateUrl: "Templates/Error.html",
				controller: "errorController"
			})
			
			.otherwise({
				redirectTo: '/ErrorPage'
			});	
	})
	.controller("registerProblemController", function ($scope, $rootScope, authenticationService, myCookieService, httpService, $location) {
		authenticationService.authAtMentorRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_problem_page = function(i){
					$location.path("/Mentor/EditProblem");
			}
			
		var params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$("form#registerProblem").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Problem Submitted successfully! ");
						$("form#registerProblem").trigger("reset");
						$location.path('/Mentor/EditProblem');
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					console.log("hdh");
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});
	})
	.controller("homeLinks", function ($rootScope, $location, myCookieService) {
		var cookieData = myCookieService.getCookie();
		$rootScope.url = "http://localhost/LJ%20Innovation%20Village/request_handler.php";
		//$rootScope.url = "http://www.ljinnovationvillage.org/request_handler.php";
		
		var homeLinks = function () {
			$rootScope.button = {
				name: "Login",
				path: "#/Login"
			};
			$rootScope.path = "Templates/links.html";
		}
		var adminLinks = function () {
			// $location.path('/Admin');
			// toastr.success('Admin Login Successful!');
			$rootScope.button = {
				name: "Logout",
				path: "#/Home"
			};
			$rootScope.path = "Templates/Admin/links.html";
		}
		var studentLinks = function () {
			// $location.path('/Student');
			// toastr.success('Admin Login Successful!');
			$rootScope.button = {
				name: "Logout",
				path: "#/Home"
			};
			$rootScope.path = "Templates/links.html";
		}
		if (cookieData == undefined) {
			homeLinks();
		} else if (cookieData.user_type == "Admin") {
			adminLinks();
		} else if (cookieData.user_type == "Student") {
			studentLinks();
		} else {}
		$rootScope.logout = function (button) {
			myCookieService.clearCookie();
			homeLinks();
			$location.path('/Home');
		}
		$rootScope.current_link = 'Home';
		$rootScope.changeLink = function(){
			$("#"+$rootScope.current_link).css('color','#9b0032');
			$rootScope.current_link = $location.url().split('/')[1];
			if($rootScope.current_link=='Admin' || $rootScope.current_link=='Student' || $rootScope.current_link=='Mentor')
			$rootScope.current_link = $location.url().split('/')[2];
			$("#"+$rootScope.current_link).css('color','black');
		};
		$rootScope.changeLink();
	})
	.controller("homeController", function ($scope, $sce, authenticationService,$rootScope ,$http) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.start = 0;
		$http.get('assets/json/videos.json').
			success(function(data, status, headers, config) {
				$scope.videos = data.videos; 
				$scope.loadVideo = function (video_id) {
					$scope.video_link = $sce.trustAsResourceUrl($scope.videos[video_id].url);
				}
				$scope.video_link = $sce.trustAsResourceUrl($scope.videos[0].url);
				$scope.next = function () {
					$scope.start += 6;
					if ($scope.start >= 11) {
						$scope.start -= 6;
					}
				}
				$scope.previous = function () {
					$scope.start -= 6;
					if ($scope.start < 0) {
						$scope.start = 0;
					}
				}
		});
		
		$http.get('assets/json/events.json').
			success(function(data, status, headers, config) {
				$scope.events = data.events; 
		});
		$http.get('assets/json/speeches.json').
			success(function(data, status, headers, config) {
				$scope.speeches = data.data;
		});
		$http.get('assets/json/initiatives.json').
			success(function(data, status, headers, config) {
				$scope.initiatives = data.data; 
		});
	})
	.controller("loginController", function ($scope, $rootScope, myCookieService, httpService, $location, authenticationService) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.email = "";
		$scope.password = "";
		$scope.login_page = 0;
		$scope.forgot_password = 1;
		$scope.toggle_page = function(){
			$scope.login_page = 1;
			$scope.forgot_password = 0;
		}
		$scope.toggle_page1 = function(){
			$scope.login_page = 0;
			$scope.forgot_password = 1;
		}
		$("form#Login").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Login Successful! ");
						var cookie = {
							"credentials": res.credentials,
							"user_type": res.user_type,
							"email": res.email,
							"first_name": res.first_name,
							"last_name": res.last_name
						};
						myCookieService.setCookie(cookie);
						$location.path("/" + res.user_type + "/Home");
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});
		$("form#ForgotPassword").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success(res.message);
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});

	})
	.controller("eventsController", function ($scope, authenticationService,$location,$http) {
		authenticationService.authAtHomeRoute();
		$scope.selected_year = $location.url().split('/')[2];
		$scope.limitPage = 1;
		$scope.allEventsLink = 0;
		$http.get('assets/json/events.json').
			success(function(data, status, headers, config) {
			$scope.events = data.events; 
		});
		$scope.viewAll = function(){
			$scope.selected_year = "";
			$scope.allEventsLink = 1;
			$scope.limitPage = $scope.events.length;
		}
	})
	.controller("speechesController", function ($scope, authenticationService,$location,$http) {
		authenticationService.authAtHomeRoute();
		$scope.person = $location.url().split('/')[2];
		$scope.limitPage = 1;
		$scope.allSpeechesLink = 0;
		$http.get('assets/json/speeches.json').
			success(function(data, status, headers, config) {
			$scope.speeches = data.data; 
		});
		$scope.viewAll = function(){
			$scope.person = "";
			$scope.allSpeechesLink = 1;
			$scope.limitPage = $scope.speeches.length;
		}
	})
	.controller("LateregisterStudentController", function ($scope, $rootScope, authenticationService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.register_password = "";
		$scope.confirm_password = "";

		$("form#registerStudent").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			if ($scope.register_password != $scope.confirm_password) {
				toastr.error("Password and Confirm Password does not match!");
			} else {
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Registration Successful! ");
							// $location.path("/Login");
							$("form#registerStudent").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			}
			return false;
		});
	})
	
	
	.controller("registerStudentController", function ($scope, $rootScope, authenticationService,$rootScope,$location) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.register_password = "";
		$scope.confirm_password = "";

		$("form#registerStudent").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			if ($scope.register_password != $scope.confirm_password) {
				toastr.error("Password and Confirm Password does not match!");
			} else {
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Registration Successful! ");
							$location.path("/Login");
							$("form#registerStudent").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			}
			return false;
		});
	})

	.controller("registerMentorController", function ($scope, $rootScope, authenticationService,$rootScope,$location,httpService, myCookieService) { 
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.register_password = "";
		$scope.confirm_password = "";
		$scope.show_mentors_page = function(i){
					$location.path("/Admin/Mentors");
			}

		
		var params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;

				},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		
		$("form#registerMentor").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			if ($scope.register_password != $scope.confirm_password) {
				toastr.error("Password and Confirm Password does not match!");
			} else {
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Registration Successful! ");
							$location.path("/Admin/Mentors");
							$("form#registerMentor").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			}
			return false;
		});
	})



	
	.controller("manageBranchesController", function ($scope, $rootScope, authenticationService,httpService,myCookieService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_masters_page = function(i){
					$location.path("/Admin/Masters");
			}

		var params = {
			"get_all_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

	})

		.controller("manageMastersController", function ($scope, $rootScope, authenticationService,httpService,myCookieService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();

	})

	
	
	.controller("addBranchController", function ($scope, $rootScope, authenticationService,myCookieService,httpService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_branch_page = function(i){
					$location.path("/Admin/Branches");
			}
		$("form#registerBranch").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			

			$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Registration Successful! ");
							$location.path("/Admin/Branches");
							$("form#registerBranch").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			
			return false;
		});
	})

		.controller("adminEditBranchController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
		$scope.branch_id = $location.url().split('/')[3];
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		console.log($scope.cookie);
		console.log($scope.branch_id)
		$scope.show_display_stream_page = function(i){
					$location.path("/Admin/Branches");
			}
		
		params = {
			"get_branch_data": true,
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"branch_id": $scope.branch_id
			};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branch = response.data.data
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$("form#editBranch").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			console.log('a');
			console.log(formData);
			$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Date Modified Successful! ");
							$location.path("/Admin/Branches");
							$("form#registerBranch").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
					
				});
			
			return false;
		});
		
		})
	
	
	.controller("manageStreamsController", function ($scope, $rootScope, authenticationService,httpService,myCookieService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_masters_page = function(i){
					$location.path("/Admin/Masters");
			}


		var params = {
			"get_all_stream_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

	})


	.controller("addStreamsController", function ($scope, $rootScope, authenticationService,myCookieService,httpService,$rootScope,$location) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_stream_page = function(i){
					$location.path("/Admin/Streams");
			}
		$("form#registerStream").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			

			$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Registration Successful! ");
							$location.path("/Admin/Streams");
							$("form#registerStream").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			
			return false;
		});
	})
	.controller("schController", function ($scope, authenticationService,$rootScope,$http) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.schedule_page1 = 0;
		$scope.schedule_page2 = 0;
		$scope.schedule_page3 = 0;

		$scope.schedule1_toggle = function (page) {
			$scope.schedule_page1 = 0;
			$scope.schedule_page2 = 1;
			$scope.schedule_page3 = 1;
		};
		$scope.schedule2_toggle = function (page) {
			$scope.schedule_page1 = 1;
			$scope.schedule_page2 = 0;
			$scope.schedule_page3 = 1;
		};
		$scope.schedule3_toggle = function (page) {
			$scope.schedule_page1 = 1;
			$scope.schedule_page2 = 1;
			$scope.schedule_page3 = 0;
		};
		$http.get('assets/json/schedule.json').
			success(function(data, status, headers, config) {
				$scope.schedules = data.data;
		});
	
	})

	.controller("mediaController", function ($scope, authenticationService) {
		authenticationService.authAtHomeRoute();
		var range = [];
		for (var i = 1; i <= 26; i++) {
			range.push(i);
		}
		$scope.images = range;

		$scope.all_images_page = 0;
		$scope.current_image_page = 1;
		$scope.current_image = 2;
		$scope.show_image = function (id) {
			$scope.all_images_page = 1;
			$scope.current_image_page = 0;
			$scope.current_image = id;
		}
		$scope.show_album = function () {
			$scope.all_images_page = 0;
			$scope.current_image_page = 1;
		}
		$scope.next = function () {
			$scope.current_image++;
			if ($scope.current_image > 26) {
				$scope.current_image = 1;
			}
		}
		$scope.previous = function () {
			$scope.current_image--;
			if ($scope.current_image == 0) {
				$scope.current_image = 26;
			}
		}
	})
	.controller("imagesController", function ($scope, authenticationService,$rootScope) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
	})
	.controller("contactController", function ($scope, authenticationService,$rootScope) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
	})
	.controller("videosController", function ($scope, authenticationService, $sce, $http) {
		authenticationService.authAtHomeRoute();
		$scope.start = 0;
		$http.get('assets/json/videos.json').
			success(function(data, status, headers, config) {
				$scope.videos = data.videos; 
				$scope.loadVideo = function (video_id) {
					$scope.video_link = $sce.trustAsResourceUrl($scope.videos[video_id].embedded);
				}
				$scope.video_link = $sce.trustAsResourceUrl($scope.videos[0].embedded);
				$scope.next = function () {
					$scope.start += 6;
					if ($scope.start >= 11) {
						$scope.start -= 6;
					}
				}
				$scope.previous = function () {
					$scope.start -= 6;
					if ($scope.start < 0) {
						$scope.start = 0;
					}
				}
		});
	})
	.controller("ljivImagesController", function ($scope, authenticationService, $location, $http) {
		authenticationService.authAtHomeRoute();
		$scope.year = $location.url().split('/')[3];
		var range = [];
		$http.get('assets/json/gallery.json').
			success(function(data, status, headers, config) {
				var gallery = data;
				for (var i = 1; i <= gallery[$scope.year].images_count; i++) {
					range.push(i);
				}
				$scope.summary = gallery[$scope.year].summary;
		});
		$scope.images11 = range;
		$scope.all_images_page = 0;
		$scope.current_image_page = 1;
		$scope.current_image = 2;
		$scope.show_image = function (id) {
			$scope.all_images_page = 1;
			$scope.current_image_page = 0;
			$scope.current_image = id;
		}
		$scope.show_album = function () {
			$scope.all_images_page = 0;
			$scope.current_image_page = 1;
		}
		$scope.next = function () {
			$scope.current_image++;
			if ($scope.current_image > length_arr[$scope.year]) {
				$scope.current_image = 1;
			}
		}
		$scope.previous = function () {
			$scope.current_image--;
			if ($scope.current_image == 0) {
				$scope.current_image = length_arr[$scope.year];
			}
		}
	})
	
	
	

	.controller("reportController", function ($scope, authenticationService,$rootScope,$http) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.reports_page = 0;
		$scope.act_page = 1;
		
		$scope.reports_toggle = function (page) {
			$scope.reports_page = 0;
			$scope.act_page = 1;
		};
		$scope.act_toggle = function (page) {
			$scope.reports_page = 1;
			$scope.act_page = 0;
		};
		$http.get('assets/json/reports.json').
			success(function(data, status, headers, config) {
				$scope.activities = data.activities; 
				$scope.achievements = data.achievements;
		});
	})

	.controller("projectController", function ($scope, authenticationService,$rootScope,httpService) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		// $scope.selected = '';
		// $scope.category_selected = "";
		// $scope.category = "All Projects";
		$scope.project_table=0;
		$scope.project_details=1;
		// $scope.selected_project = 0;
		// $scope.open_project = function(id){
		// 	var index = 0;
		// 	var keepGoing = true;
		// 	angular.forEach($scope.projects, function(key,value) {
		// 		if(keepGoing) {
		// 			if(key.project_id == id){
		// 				$scope.selected_project = index;
		// 				keepGoing = false;
		// 			}
		// 			index++;
		// 		}
		// 	  });
		// 	$scope.project_table=1;
		// 	$scope.project_details=0;
		// }
		// $scope.show_project_table = function(id){
		// 	$scope.project_table=0;
		// 	$scope.project_details=1;
		// }
		// $scope.selctedFilter = function (project_category,flag) {
		// 	if(project_category=='')
		// 		$scope.category = "All Projects";
		// 	else
		// 		$scope.category = "Selected for "+project_category;
		// 	$scope.category_selected = project_category;
		// 	$scope.selected = flag;
		// };
		
		// $scope.update_projects = function () {
		// 	params = {
		// 		"get_all_projects": true
		// 	};
		// 	httpService.sendRequest(
		// 		"GET",
		// 		function (response) {
		// 			$scope.projects = response.data;
		// 		},
		// 		function (reason) {
		// 			toastr.error("Error! " + reason.status + ": " + reason.statusText);
		// 		},
		// 		params
		// 	);
		// }
		var update_counts = function () {
			params = {
				"get_projects_count": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					var values_array=[],labels_array=[];
					angular.forEach(response.data, function(value, key) {
						values_array.push(value);
						labels_array.push(key);
					});
					
					var data = [{
						values: values_array,
						labels: labels_array,
						type: 'pie'
					  }];
					  
					  var layout = {
						height: 500,
						width: 600
					  };
					  
					Plotly.newPlot('pieChart', data, layout);
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		update_counts();
		
		// $scope.update_projects();
		
	})

	.controller("mentorController", function ($scope, authenticationService, httpService,$rootScope) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
	})


	.controller("ljkController", function ($scope, authenticationService,$rootScope,$location) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.page = $location.url().split('/')[2];
		$scope.pages = {
			"LJKnowledgeFoundation":"Templates/Content/About/LJKnowledgeFoundation.html",
			"LJGroupOfInstitute":"Templates/Content/About/LJGroupOfInstitute.html",
			"LJKFounders":"Templates/Content/About/LJKFounders.html",
			"PresidentMessage":"Templates/Content/About/PresidentMessage.html",
			"VPMessage":"Templates/Content/About/VPMessage.html"
		};
		$scope.current_html = $scope.pages[$scope.page];
		$scope.change_html = function(page){
			$scope.current_html = $scope.pages[page];
		}

	})
	.controller("innvController", function ($scope, authenticationService,$rootScope,$location) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.page = $location.url().split('/')[2];
		$scope.pages = {
			"ProjectToProduct":"Templates/Content/ProjectToProduct.html",
			"Skills":"Templates/Content/Skill Development Programs/Skills.html",
			"SkillDevelopment":"Templates/Content/Skill Development Programs/SkillDevelopment.html",
			"LJCenterOfExcellence":"Templates/Content/Skill Development Programs/LJCenterOfExcellence.html",
			"LJDesignCenter":"Templates/Content/Skill Development Programs/LJDesignCenter.html",
			"EDXCourseAraMocClub":"Templates/Content/Skill Development Programs/EDXCourseAraMocClub.html",
			"Cradle":"Templates/Content/Skill Development Programs/Cradle.html",
			"Hackathon":"Templates/Content/Skill Development Programs/Hackathon.html",
			"EntrapreneurDevelopment":"Templates/Content/Entrepreneur Development/EntrapreneurDevelopment.html",
			"Antrapreneur":"Templates/Content/Entrepreneur Development/Antrapreneur.html",
			"Antracon":"Templates/Content/Entrepreneur Development/Antracon.html",
			"LJWomenEntrepreneurship":"Templates/Content/Entrepreneur Development/LJWomenEntrepreneurship.html",
			"StartupGujaratStandupGujarat":"Templates/Content/Entrepreneur Development/StartupGujaratStandupGujarat.html",
			"StartupWeek":"Templates/Content/Entrepreneur Development/StartupWeek.html",
			"LJBusinessCatalyst":"Templates/Content/Entrepreneur Development/LJBusinessCatalyst.html",
			"CommunityOutreach":"Templates/Content/Community Outreach/CommunityOutreach.html",
			"LJSahyog":"Templates/Content/Community Outreach/LJSahyog.html",
			"LJArogyaKendra":"Templates/Content/Community Outreach/LJArogyaKendra.html",
			"LawsOnWheels":"Templates/Content/Community Outreach/LawsOnWheels.html",
			"Prayas":"Templates/Content/Community Outreach/Prayas.html"
		};
		$scope.current_html = $scope.pages[$scope.page];
		$scope.change_html = function(page){
			$scope.current_html = $scope.pages[page];
		}
	})
	.controller("adminHomeController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		$scope.cookie = myCookieService.getCookie();
		params = {
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"get_project_details": true
		};
		var update_projects = function () {
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		update_projects();
		$("form#allocateProject").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Projects Allocated! ");
						update_projects();
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})
	.controller("projectsAllocatedController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		$scope.cookie = myCookieService.getCookie();
		
		$scope.update_projects = function () {
			params = {
				"credentials": $scope.cookie.credentials,
				"email": $scope.cookie.email,
				"get_allocated_projects": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.update_projects();
			$("form#deallocateProject").submit(function (event) {
				if(confirm("Are you sure you want deallocate Projects?")){
				//disable the default form submission
				event.preventDefault();
				//grab all form data  
				var formData = new FormData($(this)[0]);
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Projects Deallocated! ");
							$scope.update_projects();
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
				return false;
			}
		});
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})
	.controller("projectRankingController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$scope.cookie = myCookieService.getCookie();
		$scope.update_projects = function () {
			params = {
				"get_all_projects": true,
				"admin": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.selected_project = 0;
		$scope.project_table=0;
		$scope.project_details=1;
		$scope.open_project = function(id){
			var index = 0;
			var keepGoing = true;
			angular.forEach($scope.projects, function(key,value) {
				if(keepGoing) {
					if(key.project_id == id){
						$scope.selected_project = index;
						keepGoing = false;
					}
					index++;
				}
			  });
			$scope.ratings = [
				{name:"Marks1","value":$scope.projects[$scope.selected_project].mark1},
				{name:"Marks2","value":$scope.projects[$scope.selected_project].mark2},
				{name:"Marks3","value":$scope.projects[$scope.selected_project].mark3},
				{name:"Marks4","value":$scope.projects[$scope.selected_project].mark4},
				{name:"Marks5","value":$scope.projects[$scope.selected_project].mark5}
			];
			$scope.project_table=1;
			$scope.project_details=0;
		}
		$scope.show_project_table = function(id){
			$scope.project_table=0;
			$scope.project_details=1;
		}
		$scope.update_projects();

		$scope.selected_toggle = function(id){
			params = {
				"project_id":id,
				"email":$scope.cookie.email,
				"credentials":$scope.cookie.credentials,
				"project_selection_toggle": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					res = response.data;
					if (res.success == true) {
						toastr.success(res.message);
						$scope.update_projects();
					} else
						toastr.error("Error :" + res.error_message);
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})
	
	.controller("reportsController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		var params = {
			"get_project_states_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.states = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		var params = {
			"get_project_inst_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.inst = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$scope.cookie = myCookieService.getCookie();
		$scope.update_projects = function () {
			params = {
				"get_all_projects": true
				// "admin": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.selected_project = 0;
		$scope.project_table=0;
		$scope.project_details=1;
		$scope.print_individual_project=1;
		$scope.print_individual_page = 1;
		$scope.open_project = function(id){
			var index = 0;
			var keepGoing = true;
			angular.forEach($scope.projects, function(key,value) {
				if(keepGoing) {
					if(key.project_id == id){
						$scope.selected_project = index;
						console.log($scope.selected_project);
						keepGoing = false;
					}
					index++;
				}
			  });
			// $scope.ratings = [
			// 	{name:"Marks1","value":$scope.projects[$scope.selected_project].mark1},
			// 	{name:"Marks2","value":$scope.projects[$scope.selected_project].mark2},
			// 	{name:"Marks3","value":$scope.projects[$scope.selected_project].mark3},
			// 	{name:"Marks4","value":$scope.projects[$scope.selected_project].mark4},
			// 	{name:"Marks5","value":$scope.projects[$scope.selected_project].mark5}
			// ];
			$scope.summary_page=1;
			$scope.print_individual_project=0;
			$scope.print_individual_page = 0;
		}
		$scope.show_summary_page = function(i){
			$scope.summary_page=0;
			$scope.print_individual_project=1;
			$scope.print_individual_page = 1;
		}
		$scope.show_project_table = function(id){
			$scope.project_table=0;
			$scope.project_details=1;
		}
		$scope.update_projects();

		$scope.selected_toggle = function(id){
			params = {
				"project_id":id,
				"email":$scope.cookie.email,
				"credentials":$scope.cookie.credentials,
				"project_selection_toggle": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					res = response.data;
					if (res.success == true) {
						toastr.success(res.message);
						$scope.update_projects();
					} else
						toastr.error("Error :" + res.error_message);
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}

		$scope.selected_page = "summary";
		$scope.summary_page = 0;
		$scope.print_page = 1;
		$scope.changePage = function(){
			if($scope.selected_page=="summary"){
				$scope.summary_page = 0;
				$scope.print_page = 1;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
			else{
				$scope.summary_page = 1;
				$scope.print_page = 0;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
		}
		$scope.checkFirst = function(value){
			if(value==0)
				return true;
			return false;
		}
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})
	//
		.controller("adminProblemsController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		
		/*
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		var params = {
			"get_project_states_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.states = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		var params = {
			"get_project_inst_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.inst = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		*/
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$scope.cookie = myCookieService.getCookie();
		$scope.update_projects = function () {
			params = {
				//"get_all_problems": true
				"get_all_projects": true
				// "admin": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.selected_project = 0;
		$scope.project_table=0;
		$scope.project_details=1;
		$scope.print_individual_project=1;
		$scope.print_individual_page = 1;
		$scope.open_project = function(id){
			var index = 0;
			var keepGoing = true;
			angular.forEach($scope.projects, function(key,value) {
				if(keepGoing) {
					if(key.project_id == id){
						$scope.selected_project = index;
						console.log($scope.selected_project);
						keepGoing = false;
					}
					index++;
				}
			  });
			// $scope.ratings = [
			// 	{name:"Marks1","value":$scope.projects[$scope.selected_project].mark1},
			// 	{name:"Marks2","value":$scope.projects[$scope.selected_project].mark2},
			// 	{name:"Marks3","value":$scope.projects[$scope.selected_project].mark3},
			// 	{name:"Marks4","value":$scope.projects[$scope.selected_project].mark4},
			// 	{name:"Marks5","value":$scope.projects[$scope.selected_project].mark5}
			// ];
			$scope.summary_page=1;
			$scope.print_individual_project=0;
			$scope.print_individual_page = 0;
		}
		$scope.show_summary_page = function(i){
			$scope.summary_page=0;
			$scope.print_individual_project=1;
			$scope.print_individual_page = 1;
		}
		$scope.show_project_table = function(id){
			$scope.project_table=0;
			$scope.project_details=1;
		}
		$scope.update_projects();

		$scope.selected_toggle = function(id){
			params = {
				"project_id":id,
				"email":$scope.cookie.email,
				"credentials":$scope.cookie.credentials,
				"project_selection_toggle": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					res = response.data;
					if (res.success == true) {
						toastr.success(res.message);
						$scope.update_projects();
					} else
						toastr.error("Error :" + res.error_message);
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}

		$scope.selected_page = "summary";
		$scope.summary_page = 0;
		$scope.print_page = 1;
		$scope.changePage = function(){
			if($scope.selected_page=="summary"){
				$scope.summary_page = 0;
				$scope.print_page = 1;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
			else{
				$scope.summary_page = 1;
				$scope.print_page = 0;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
		}
		$scope.checkFirst = function(value){
			if(value==0)
				return true;
			return false;
		}
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})

	
	//
	.controller("bookletController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.getEven = function(index){
			if(index%2!=0 && index!=0)
				document.getElementById('project-'+index).classList.add("page-break-after");
			// 
			// 	return true;
			return true;
		}
		var params = {
			"get_mentor_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.mentors = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		var params = {
			"get_project_states_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.states = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		var params = {
			"get_project_inst_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.inst = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$scope.cookie = myCookieService.getCookie();
		$scope.update_projects = function () {
			params = {
				"get_all_projects": true
				// "admin": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		$scope.selected_project = 0;
		$scope.project_table=0;
		$scope.project_details=1;
		$scope.print_individual_project=1;
		$scope.print_individual_page = 1;
		$scope.open_project = function(id){
			var index = 0;
			var keepGoing = true;
			angular.forEach($scope.projects, function(key,value) {
				if(keepGoing) {
					if(key.project_id == id){
						$scope.selected_project = index;
						console.log($scope.selected_project);
						keepGoing = false;
					}
					index++;
				}
			  });
			// $scope.ratings = [
			// 	{name:"Marks1","value":$scope.projects[$scope.selected_project].mark1},
			// 	{name:"Marks2","value":$scope.projects[$scope.selected_project].mark2},
			// 	{name:"Marks3","value":$scope.projects[$scope.selected_project].mark3},
			// 	{name:"Marks4","value":$scope.projects[$scope.selected_project].mark4},
			// 	{name:"Marks5","value":$scope.projects[$scope.selected_project].mark5}
			// ];
			$scope.summary_page=1;
			$scope.print_individual_project=0;
			$scope.print_individual_page = 0;
		}
		$scope.show_summary_page = function(i){
			$scope.summary_page=0;
			$scope.print_individual_project=1;
			$scope.print_individual_page = 1;
		}
		$scope.show_project_table = function(id){
			$scope.project_table=0;
			$scope.project_details=1;
		}
		$scope.update_projects();

		$scope.selected_toggle = function(id){
			params = {
				"project_id":id,
				"email":$scope.cookie.email,
				"credentials":$scope.cookie.credentials,
				"project_selection_toggle": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					res = response.data;
					if (res.success == true) {
						toastr.success(res.message);
						$scope.update_projects();
					} else
						toastr.error("Error :" + res.error_message);
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}

		$scope.selected_page = "summary";
		$scope.summary_page = 0;
		$scope.print_page = 1;
		$scope.changePage = function(){
			if($scope.selected_page=="summary"){
				$scope.summary_page = 0;
				$scope.print_page = 1;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
			else{
				$scope.summary_page = 1;
				$scope.print_page = 0;
				$scope.print_individual_page = 1;
				$scope.print_individual_project=1;
			}
		}
		$scope.checkFirst = function(value){
			if(value==0)
				return true;
			return false;
		}
		$scope.changeFilter = function(){
			if($scope.selected_branch=='')
				$scope.selected_branch = undefined;
			if($scope.selected_stream=='')
				$scope.selected_stream = undefined;
		}
	})
	
	.controller("mentorEPController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtMentorRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_problem_page = function(i){
					$location.path("/Mentor/EditProblem");
			}
		
		
		var update_problems = function(){
			params = {
				"credentials": $scope.cookie.credentials,
				"email": $scope.cookie.email,
				"get_problems_mentor": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.problems = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		update_problems();
		$scope.selected_problem = 0;
		$scope.problem_table=0;
		$scope.problem_details=1;
		$scope.open_problem = function(id){
			
			$scope.selected_problem = id;
			$scope.problem_table=1;
			$scope.problem_details=0;
		}
		$scope.show_project_table = function(id){
			$scope.problem_table=0;
			$scope.problem_details=1;
		}
		
		})
		.controller("mentorEditProblemController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
		$scope.problem_id = $location.url().split('/')[3];
		authenticationService.authAtMentorRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_problem_page = function(i){
					$location.path("/Mentor/EditProblem");
			}
		// $scope.problemData = {
		//	problemName: 'Problem1'
		//}
		//console.log($scope.problem_id)
		
		params = {
			"get_edit_problem_data": true,
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"problem_id": $scope.problem_id
		
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.problem = response.data.data
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
				params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
		params);
		$("form#modifyProblem").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Problem Updated! ");
						$("form#editProblem").trigger("reset");
						$location.path('/Mentor/EditProblem');
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});

		
		
		})
		
		
		.controller("displayProblemController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
		$scope.problem_id = $location.url().split('/')[3];
		authenticationService.authAtStudentRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_display_problem_page = function(i){
					$location.path("/Student/Problems");
			}
		
		params = {
			"get_display_problem_data": true,
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"problem_id": $scope.problem_id
		
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.problem = response.data.data
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		
		})

		.controller("adminDisplayProblemController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
		$scope.problem_id = $location.url().split('/')[3];
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_admin_displayproblem_page = function(i){
					$location.path("/Admin/EditProblem");
			}
		
		params = {
			"get_display_problem_data": true,
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"problem_id": $scope.problem_id
		
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.problem = response.data.data
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		
		
		})

		
		//
		
		
		.controller("adminEditStreamController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
		$scope.stream_id = $location.url().split('/')[3];
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		console.log($scope.cookie);
		console.log($scope.stream_id);
		$scope.show_display_stream_page = function(i){
					$location.path("/Admin/Streams");
			}
		
		params = {
			"get_stream_data": true,
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"stream_id": $scope.stream_id
			};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.stream = response.data.data
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$("form#editStream").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			console.log('a');
			console.log(formData);
			$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Date Modified Successful! ");
							$location.path("/Admin/Streams");
							$("form#registerStream").trigger("reset");
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
					
				});
			
			return false;
		});
		
		})

		.controller("adminEPController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		
		var update_problems = function(){
			params = {
				"credentials": $scope.cookie.credentials,
				"email": $scope.cookie.email,
				"get_all_problems": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.problems = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		update_problems();
		$scope.selected_problem = 0;
		$scope.problem_table=0;
		$scope.problem_details=1;
		$scope.open_problem = function(id){
			
			$scope.selected_problem = id;
			$scope.problem_table=1;
			$scope.problem_details=0;
		}
		$scope.show_project_table = function(id){
			$scope.problem_table=0;
			$scope.problem_details=1;
		}
		
		})


		.controller("problemsController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtStudentRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		
		var update_problems = function(){
			params = {
				"credentials": $scope.cookie.credentials,
				"email": $scope.cookie.email,
				"get_all_problems": true
			};
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.problems = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		update_problems();
		
		})
	
	.controller("manageMentorController", function ($scope, $rootScope, authenticationService, httpService, myCookieService,$location) {
	authenticationService.authAtAdminRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$scope.show_masters_page = function(i){
					$location.path("/Admin/Masters");
			}

		params = {
			"get_mentor_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
				$scope.mentors = response.data.mentors;
				
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);		
	})	

	.controller("mentorHomeController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
	authenticationService.authAtMentorRoute();
		$rootScope.changeLink();
	})	
	.controller("mentorProjectAllocatedController", function ($scope, $rootScope, authenticationService, httpService, myCookieService) {
		authenticationService.authAtMentorRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		params = {
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"get_projects_mentor": true
		};
		var update_projects = function(){
			httpService.sendRequest(
				"GET",
				function (response) {
					$scope.projects = response.data;
				},
				function (reason) {
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				},
				params
			);
		}
		update_projects();
		$scope.selected_project = 0;
		$scope.project_table=0;
		$scope.project_details=1;
		$scope.open_project = function(id){
			
			$scope.selected_project = id;
			$scope.ratings = [
				{name:"Marks1","value":$scope.projects[$scope.selected_project].mark1},
				{name:"Marks2","value":$scope.projects[$scope.selected_project].mark2},
				{name:"Marks3","value":$scope.projects[$scope.selected_project].mark3},
				{name:"Marks4","value":$scope.projects[$scope.selected_project].mark4},
				{name:"Marks5","value":$scope.projects[$scope.selected_project].mark5}
			];
			$scope.project_table=1;
			$scope.project_details=0;
		}
		$scope.show_project_table = function(id){
			$scope.project_table=0;
			$scope.project_details=1;
		}
		$scope.ratings = [
			{name:"Marks1"},
			{name:"Marks2"},
			{name:"Marks3"},
			{name:"Marks4"},
			{name:"Marks5"}
		];
		$scope.myRating1 = 5;
		$scope.myRating2 = 5;
		$scope.myRating3 = 5;
		$scope.myRating4 = 5;
		$scope.myRating5 = 5;
		$("form#projectRating").submit(function (event) {
			if(confirm("Are you sure you want to submit ratings?")){
				//disable the default form submission
				event.preventDefault();
				//grab all form data  
				var formData = new FormData($(this)[0]);
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Ratings Added! ");
							update_projects();
							$scope.project_table=0;
							$scope.project_details=1;
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
				return false;
			}
		});
	})
	.controller("changePasswordController", function ($scope, $rootScope, authenticationService, httpService, myCookieService, $location) {
		var user = $location.url().split('/')[1];
		if(user == 'Mentor')
			authenticationService.authAtMentorRoute();
		else if(user == 'Admin')
			authenticationService.authAtAdminRoute();
		else
			$location.path('/ErrorPage');
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		$("form#changePassword").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			if ($scope.password != $scope.confirm_password) {
				toastr.error("Password and Confirm Password does not match!");
			} else {
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Password Changed! ");
							$("form#changePassword").trigger("reset");
							var cookie = {
								"credentials": res.credentials,
								"user_type": res.user_type,
								"email": res.email,
								"first_name": res.first_name,
								"last_name": res.last_name
							};
							myCookieService.clearCookie();
							myCookieService.setCookie(cookie);
							$scope.cookie = myCookieService.getCookie();
						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			}
			return false;
		});
			
	})
	.controller("ljivController", function ($scope, authenticationService,httpService,$rootScope) {
		authenticationService.authAtHomeRoute();
		$rootScope.changeLink();
		$scope.ljiv_page = 0;
		$scope.ljivr_page = 1;
		$scope.ljivc_page = 1;
		$scope.ljiva_page = 1;
		$scope.ljivs_page = 1;
		$scope.ljivsp_page = 1;
		$scope.ljivec_page = 1;


		$scope.ljiv_toggle = function (page) {
			$scope.ljiv_page = 0;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 1;
		};

		$scope.ljivr_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 0;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 1;
		};
		$scope.ljivc_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 0;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 1;
		};
		$scope.ljiva_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 0;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 1;
		};
		$scope.ljivsp_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 0;
			$scope.ljivec_page = 1;
		};
		$scope.ljivs_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 0;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 1;
		};
		$scope.ljivec_toggle = function (page) {
			$scope.ljiv_page = 1;
			$scope.ljivr_page = 1;
			$scope.ljivc_page = 1;
			$scope.ljiva_page = 1;
			$scope.ljivs_page = 1;
			$scope.ljivsp_page = 1;
			$scope.ljivec_page = 0;
		};
		var params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

	})
	.controller("studentHomeController", function ($scope, authenticationService, myCookieService, httpService,$rootScope) {
		authenticationService.authAtStudentRoute();
		$rootScope.changeLink();
		$scope.edit_project_div = 1;
		$scope.add_project_div = 1;
		$scope.cookie = myCookieService.getCookie();
		var params = {
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"get_project_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				if (response.data.success == true) {
					$scope.project = response.data.data;
					$scope.project_image = "images/project/" + $scope.project.project_id + "/" + $scope.project.project_image;
					$scope.edit_project_div = 0;
				} else {
					$scope.add_project_div = 0;
				}
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
	})
	.controller("studentProjectController", function ($scope, $rootScope, authenticationService, myCookieService, httpService, $location) {
		authenticationService.authAtStudentRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		var params = {
			"email": $scope.cookie.email,
			"get_project_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
				$scope.projects = response.data.projects;
				
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);
		$("form#addProject").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Project Submitted successfully! ");
						$("form#addProject").trigger("reset");
						$location.path('/Student/Home');
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});
	})
	.controller("studentEditProjectController", function ($scope, $rootScope, authenticationService, myCookieService, httpService, $location) {
		
		authenticationService.authAtStudentRoute();
		$scope.cookie = myCookieService.getCookie();
		$scope.cookie = myCookieService.getCookie();
		var params = {
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"get_project_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				if (response.data.success == true) {
					$scope.project = response.data.data;
					$scope.project_image = "images/project/" + $scope.project.project_id + "/" + $scope.project.project_image;
					$scope.edit_project_div = 0;
					
					$scope.project.guide_honorific = $scope.project.guide_name.split(' ')[0];
					$scope.project.guide_first_name = $scope.project.guide_name.split(' ')[1];
					$scope.project.guide_last_name = $scope.project.guide_name.split(' ')[2];

					$scope.project.co_guide_honorific = $scope.project.co_guide_name.split(' ')[0];
					$scope.project.co_guide_first_name = $scope.project.co_guide_name.split(' ')[1];
					$scope.project.co_guide_last_name = $scope.project.co_guide_name.split(' ')[2];
					
					$scope.project.team_members = $scope.project.team_member_names.split(',');
					
					for(let i=0 ; i<$scope.project.team_members.length ; i++)
					{
						let honorific = $scope.project.team_members[i].trim().split(' ')[0];
						let first_name = $scope.project.team_members[i].trim().split(' ')[1];
						let last_name = $scope.project.team_members[i].trim().split(' ')[2];
						
						$scope.project.team_members[i] = {};
						$scope.project.team_members[i].honorific = honorific;
						$scope.project.team_members[i].first_name = first_name;
						$scope.project.team_members[i].last_name = last_name;
					}
					
					$scope.project.team_member_string = function() {
						return _.map($scope.project.team_members, function(i) { 
							return i.honorific === undefined || i.first_name === undefined || i.last_name === undefined ? '' : i.honorific +' '+ i.first_name +' '+ i.last_name
						}).join(', ')
					}
					if($scope.project.guide_contact==0)
						$scope.project.guide_contact='';
					if($scope.project.co_guide_contact==0)
						$scope.project.co_guide_contact='';
					var jsonData;
					$.getJSON("assets/json/states.json", function (data) {
						jsonData = data;
						var str = "<option value='' disabled>Select State</option>";
						$.each(Object.keys(data), function (key, value) {
							let selected = $scope.project.institute_state == value ? 'selected' : '';
							
							str += "<option value='" + value + "' "+ selected +">" + value + "</option>";
						});
						$("#state").html(str + "</select>");
						displayCities($scope.project.institute_state);
						// $("#state").value("project.institute_state");
					});

					function displayCities(state) {
						var str = "<option value='' disabled selected>Select Cities</option>";
						$.each(jsonData[state], function (key, value) {
							let selected = $scope.project.institute_city == value ? 'selected' : '';
							
							str += "<option value='" + value + "' "+selected + ">" + value + "</option>";
						});
						$("#cities").html(str + "</select>");
					}
					loadTeamMembersFields(1);
				
					function loadTeamMembersFields(n) {
						var str = "";
						for (var i = 1; i <= n; i++) {
							str += "<div class='4u 12u$(xsmall)'><h6>Honorific</h6><select name='team_member_honorific" + i +
								"' class='browser-default'><option disabled selected>Honorific</option><option value='Mr.'>Mr.</option><option value='Mrs.'>Mrs.</option><option value='Ms.'>Ms.</option><option value='Miss.'>Miss.</option></select></div><div class='4u 12u$(xsmall)'><h6>First Name</h6><input name='team_member_first_name" +
								i +
								"' placeholder='First Name' class='input-fields' id='full_name' type='text' class='validate' required></div><div class='4u 12u$(xsmall)'><h6>Last Name</h6><input name='team_member_last_name" +
								i +
								"' placeholder='Last Name' class='input-fields' id='full_name' type='text' class='validate' required></div>";
						}
						$("#team_members").html(str);
					}
				} else {
					$scope.add_project_div = 0;
				}
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
		params);
		
		params = {
			"get_stream_branch_data": true
		};
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.branches = response.data.branches;
				$scope.streams = response.data.streams;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
		params);

		$("form#editProject").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: $rootScope.url,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					var res = JSON.parse(response);
					if (res.success == true) {
						toastr.success("Project Updated! ");
						$("form#addProject").trigger("reset");
						$location.path('/Student/Home');
					} else
						toastr.error("Error :" + res.error_message);
				},
				error: function (reason) {
					var res = JSON.parse(reason);
					toastr.error("Error! " + reason.status + ": " + reason.statusText);
				}
			});
			return false;
		});
	})
	.controller("studentProfileController", function ($scope, $rootScope, $location , authenticationService, myCookieService, httpService) {
		authenticationService.authAtStudentRoute();
		$rootScope.changeLink();
		$scope.cookie = myCookieService.getCookie();
		var params = {
			"credentials": $scope.cookie.credentials,
			"email": $scope.cookie.email,
			"get_student_data": true
		};
		$scope.toggle_back = function(){
			$location.path('/Student/Home');
		}
		httpService.sendRequest(
			"GET",
			function (response) {
				$scope.student = response.data;
			},
			function (reason) {
				toastr.error("Error! " + reason.status + ": " + reason.statusText);
			},
			params
		);

		$("form#registerStudent").submit(function (event) {
			//disable the default form submission
			event.preventDefault();
			//grab all form data  
			var formData = new FormData($(this)[0]);
			if ($scope.password != $scope.confirm_password) {
				toastr.error("Password and Confirm Password does not match!");
			} else {
				$.ajax({
					url: $rootScope.url,
					type: 'POST',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function (response) {
						var res = JSON.parse(response);
						if (res.success == true) {
							toastr.success("Profile Updated! ");
							var cookie = {
								"credentials": res.credentials,
								"user_type": res.user_type,
								"email": res.email,
								"first_name": res.first_name,
								"last_name": res.last_name
							};
							myCookieService.clearCookie();
							myCookieService.setCookie(cookie);
							$location.path('/Student/Home');

						} else
							toastr.error("Error :" + res.error_message);
					},
					error: function (reason) {
						var res = JSON.parse(reason);
						toastr.error("Error! " + reason.status + ": " + reason.statusText);
					}
				});
			}
			return false;
		});
	})
	.controller("errorController", function ($scope) {});

	app.filter('range', function() {
	return function(input, total) {
	  total = parseInt(total);
  
	  for (var i=0; i<total; i++) {
		input.push(i);
	  }
  
	  return input;
	};
  });