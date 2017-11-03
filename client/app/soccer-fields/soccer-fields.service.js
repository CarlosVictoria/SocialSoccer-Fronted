'use strict';

function soccerFieldsService(API, $resource) {
	return $resource(API + '/api/soccer_fields/:idSoccerFields',{
    id:'@idSoccerFields'
  },{
    update:{
      method: 'PUT'
    }
  })
}

angular.module('socialSoccerApp')
  .factory('soccerFieldsService', soccerFieldsService);
