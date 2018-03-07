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
    getIdUser:getIdUser,
    getRoles: getRoles,
    getProfilePicture: getProfilePicture

  };

  function getProfilePicture(){
    return localStorage.getItem('avatar') ?  localStorage.getItem('avatar') : $auth.getPayload().avatar;
  }


    function login(user,collback){
   		$auth.login(user)
   		.then(response => {
   			console.log('Login ok',response);
   			$state.go('main');


        var notification = null;
          if (!('Notification' in window)) {
              // el navegador no soporta la API de notificaciones
              alert('Su navegador no soporta la API de Notificaciones :(');
              return;
          } else if (Notification.permission === "granted") {
              // Se puede emplear las notificaciones
                var opciones = {
                  icon: "assets/notifications/llave.png",
                  body: "Sesion iniciada correctamente"

                }
              notification = new Notification( "Hola, Bienvenido", opciones);

          } else if (Notification.permission !== 'denied') {
              // se pregunta al usuario para emplear las notificaciones
              Notification
                      .requestPermission(function(permission) {
                  if (permission === "granted") {
                      notification = new Notification(
                              "Hola Mundo");
                  }
              });
          }
   		})
   		.catch(err =>{
        var notification = null;
          if (!('Notification' in window)) {
              // el navegador no soporta la API de notificaciones
              alert('Su navegador no soporta la API de Notificaciones :(');
              return;
          } else if (Notification.permission === "granted") {
              // Se puede emplear las notificaciones
                var opciones = {
                  icon: "assets/notifications/1.png",
                  body: err.data
                }
              notification = new Notification( " ", opciones);
          } else if (Notification.permission !== 'denied') {
              // se pregunta al usuario para emplear las notificaciones
              Notification
                      .requestPermission(function(permission) {
                  if (permission === "granted") {
                      notification = new Notification(
                              "");
                  }
              });
          }
   			console.log('main',err);
   			$state.go('login');
   		});
   	}
  /*
Toma todos los roles que tenga el usuario que inicio session
*/
  function getRoles(){
    if (Auth.isAuthenticated()) {
      return $auth.getPayload().roles
    }else {
      return false;
    }
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
