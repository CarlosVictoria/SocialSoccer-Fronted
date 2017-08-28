'use strict';

function documentTypesService(API,$resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API + '/api/document_types/:idDocumentTypes',{
    id:'@idDocumentTypes'
  },{
    update:{
      method:'PUT'
    }
  });
}

angular.module('socialSoccerApp')
  .factory('documentTypesService', documentTypesService);
  documentTypesService.inject = ['API','$resource'];
