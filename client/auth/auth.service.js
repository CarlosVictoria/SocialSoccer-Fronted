'use strict';

function authService($auth,$state) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  var Auth = {
    login:login,
 		logout:logout,
 		isAdmin:isAdmin,
		isUser:isUser,
		isAuthenticated:isAuthenticated
  };

  function login(user,collback){
 		$auth.login(user)
 		.then(response => {
 			console.log('Login ok',response);
 			$state.go('main');
 		})
 		.catch(err =>{
 			console.log('main',err);
 			$state.go('login');
 		});
 	}

  function logout(){
    if ($auth.isAuthenticated()) {
      $auth.logout()
      .then(response => {
        $state.go('main');
      })
    }
  }

  function isAdmin(){
    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
        return true;
      }else {
        return false;
      }
    }else {
      return false;
    }
  }

  function isUser(){
    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("USER") !== -1) {
        return true;
      }else {
        return false;
      }
    }else {
      return false;
    }
  }

  function isAuthenticated(){
    if ($auth.isAuthenticated()) {
      return true;
    }else {
      return false;
    }
  }

  return Auth;
}

authService.$inject  = ['$auth','$state'];
angular.module('socialSoccerApp')
  .factory('authService', authService);