'use strict';
(function(){
  class UsersListComponent {
    constructor(usersService, NavegateParams, $state) {
      this.usersService = usersService;
      this.NavegateParams = NavegateParams;
      this.$state = $state;

      this.query = {
        limit:4,
        page:1
      };
    }

    $onInit(){
    	this.usersService.query().$promise
    	.then(response => {
    		console.log("USUARIOS OK",response);
        this.users = response;
    	})
    	.catch(err => {
    		console.log("ERROR",err);
    	});


    }
    goUpdateUser(idUser){
      this.NavegateParams.setData('idUser', idUser);
      this.$state.go("users-update");
    }

    changeStatus(item) {
          this.usersService.update(item).$promise
              .then(response => {})
              .catch(err => {})
      }

    // cambiarEstado(user){
    //   user.active = !user.active;
    //   console.log("ok");
    //   this.usersService.update(user).$promise
    //   .then(response => {
    //     alert("Se ha efectuado el cambio de estado");
    //   })
    //   .catch(err => {
    //     alert("Hubo problemas al afectuar el cambio de estado");
    //   })
    // }

  }
UsersListComponent.$inject = ['usersService','NavegateParams', '$state'];
angular.module('socialSoccerApp')
  .component('usersList', {
    templateUrl: 'app/users/users-list/users-list.html',
    controller: UsersListComponent,
    controllerAs:'vm'
  });

})();
