'use strict';

function departmentsService(API,$resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API + '/api/departments/:idDepartments',{
    id:'@idDepartments'
  },{
    update:{
      method: 'PUT'
    }
  });
}

angular.module('socialSoccerApp')
  .factory('departmentsService', departmentsService);
  departmentsService.inject = ['API','$resource'];
