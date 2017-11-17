'use strict';

function soccerFieldsService(API, $resource) {
	return $resource(API + '/api/soccer_fields/:idSoccerFields',{
    id:'@idSoccerFields'
  },{
    update:{
      method: 'PUT'
    },
		getSoccerFiels:{
			url: API + '/api/soccer_fields/:idHeadquarters/:idEstablishments/:idEstablishments',
			method: 'GET',
			isArray : true
		}
  });
}

angular.module('socialSoccerApp')
  .factory('soccerFieldsService', soccerFieldsService);
