'use strict';
(function(){

angular.module('socialSoccerApp')
  .run(function($rootScope, $state, authService){
    $rootScope.$on('$stateChangeStart', function(event, next){
      if (!next.authenticate) {
        return;
      }
      if (typeof next.authenticate == 'object') {
        var stateRoles = next.authenticate;
        var roles = authService.getRoles();
        if (roles != false) {
          for (var i = 0; i < stateRoles.length; i++) {
            if (roles.indexOf(stateRoles[i]) !== -1) {
              return;
            }
          }
          event.preventDefault();
          $state.go("forbidden");
        }else {
          event.preventDefault();
          $state.go("forbidden");
        }
      }else {
        if (authService.isAuthenticated()) {
          return;
        }else {
          event.preventDefault();
          $state.go("login");
        }
      }
    });
  });
})();
