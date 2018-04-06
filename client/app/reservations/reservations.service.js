'use strict';

function reservationsService(API, $resource) {
	return $resource(API + '/api/reservations/:idReservations',{
    id:'@idReservations'
  },{
    update:{
      method: 'PUT'
    },
    get:{
			url: API + '/api/reservations/test?idUsuario()',
			method: 'GET',
			isArray : true
		}
  })
}

angular.module('socialSoccerApp')
  .factory('reservationsService', reservationsService);
