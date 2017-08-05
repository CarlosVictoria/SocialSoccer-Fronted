'use strict';
(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('socialSoccerApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
