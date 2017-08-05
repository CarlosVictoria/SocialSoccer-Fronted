'use strict';
(function(){

class UsersListComponent {
  constructor(usersService) {
    this.usuarios = usersService.query();
    console.log(this.usuarios);
  }
}
UsersListComponent.$inject = ['usersService'];
angular.module('socialSoccerApp')
  .component('usersList', {
    templateUrl: 'app/users/users-list/users-list.html',
    controller: UsersListComponent,
    controllerAs:'vm'
  });

})();
