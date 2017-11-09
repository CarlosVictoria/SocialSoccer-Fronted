'use strict';

function establishmentsService(API, $resource) {
	return $resource(API + '/api/establishments/:idEstablishments',{
    id:'@idEstablishments'
  },{
    update:{
      method: 'PUT'
    }
  })
}

angular.module('socialSoccerApp')
  .factory('establishmentsService', establishmentsService);
