'use strict';

function reservationsService(API, $resource) {
	return $resource(API + '/api/reservations/:idReservations',{
    id:'@idReservations'
  },{
    update:{
      method: 'PUT'
    }
  })
}

angular.module('socialSoccerApp')
  .factory('reservationsService', reservationsService);