'use strict';

(function(){

class ProfileComponent {
  constructor() {

  }
}

angular.module('socialSoccerApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
