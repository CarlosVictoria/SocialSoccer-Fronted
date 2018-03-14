'use strict';

function soccerService(API, $resource) {
	return $resource(API + '/api/soccer_fields/:id',{
    id:'@id'
  },{
    update:{
      method: 'PUT'
    }
  })
}

angular.module('socialSoccerApp')
  .factory('soccerService', soccerService);
