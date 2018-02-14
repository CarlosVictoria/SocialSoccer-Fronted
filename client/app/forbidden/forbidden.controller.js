'use strict';

(function(){

class ForbiddenComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('socialSoccerApp')
  .component('forbidden', {
    templateUrl: 'app/forbidden/forbidden.html',
    controller: ForbiddenComponent,
    controllerAs: 'forbiddenCtrl'
  });

})();
