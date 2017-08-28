'use strict';

function citiesService(API,$resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API + '/api/cities/:idCities',{
    id:'@idCities'
  },{
    update:{
      method: 'PUT'
    },
    getCities:{
      url: API + '/api/cities/find',
      method: 'GET',
      isArray: true
    }
  });
}

angular.module('socialSoccerApp')
  .factory('citiesService', citiesService);
  citiesService.inject = ['API','$resource'];
