'use strict';
function usersService(API, $resource){
  return $resource(API + '/api/users/:idUsers',{
    id:'@idUsers'
  },{
    update:{
      method:'PUT'
    }
  });
}
angular.module('socialSoccerApp')
  .factory('usersService', usersService);
usersService.inject = ['API','$resource'];
