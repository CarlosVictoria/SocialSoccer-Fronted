'use strict';

(function(){

class SoccerFieldsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('socialSoccerApp')
  .component('soccerFields', {
    templateUrl: 'app/soccer-fields/soccer-fields/soccer-fields.html',
    controller: SoccerFieldsComponent,
    controllerAs: 'soccerFieldsCtrl'
  });

})();
