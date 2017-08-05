'use strict';
function usersService(API, $resource){
  return $resource(API + '/usuarios/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
angular.module('socialSoccerApp')
  .factory('usersService', usersService);
usersService.inject = ['API','$resource'];

