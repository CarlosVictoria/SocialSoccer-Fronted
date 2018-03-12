'use strict';
function usersService( $resource, API){
  return $resource(API + '/api/users/:idUsers',{
    idUsers:'@idUsers'
  },{
    update:{
      method:'PUT'
    }
  })
}
usersService.inject = ['$resource', 'API'];
angular.module('socialSoccerApp')
  .factory('usersService', usersService);
