'use strict';

function establishmentsService(API, $resource) {
	return $resource(API + '/api/establishments/:idEstablishments',{
    id:'@idEstablishments'
  },{
    update:{
      method: 'PUT'
    },
    getEstablishments:{
      url: API + '/api/establishments/find',
      method: 'GET',
      isArray: true
    }
  });
}

establishmentsService.inject = ['API', '$resource'];
angular.module('socialSoccerApp')
  .factory('establishmentsService', establishmentsService);
