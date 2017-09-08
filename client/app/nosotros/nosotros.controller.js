'use strict';

(function(){

class NosotrosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('socialSoccerApp')
  .component('nosotros', {
    templateUrl: 'app/nosotros/nosotros.html',
    controller: NosotrosComponent,
    controllerAs: 'nosotrosCtrl'
  });

})();
