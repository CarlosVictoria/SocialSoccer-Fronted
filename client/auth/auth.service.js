'use strict';

function authService($auth,$state) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  var Auth = {
    login:login,
 		logout:logout,
    username: username,
    userlastname: userlastname,
 		isAdmin:isAdmin,
    isOwner:isOwner,
		isUser:isUser,
		isAuthenticated:isAuthenticated,
    getIdUser:getIdUser
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

  function getIdUser(){
    if(Auth.isAuthenticated()){
      return $auth.getPayload().sub;
    }else{
      return null;
    }
  }

  function logout(){
    if ($auth.isAuthenticated()) {
      $auth.logout()
      .then(response => {
        $state.go('main');
      })
    }
  }

  function username(){
    return $auth.getPayload().name;

  }
    function userlastname(){
    return $auth.getPayload().lastname;
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

  function isOwner(){
    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("OWNER") !== -1) {
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
