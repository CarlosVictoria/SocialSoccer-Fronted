'use strict';

(function(){

class ProfileComponent {
  constructor(usersService, $state,authService) {
    this.usersService = usersService;
    this.$state = $state;
    this.authService = authService;
  }

  $onInit(){
    this.usersService.get({idUsers:this.authService.getIdUser()}).$promise
    .then(response=>{
      this.user = response;
      console.log('Perfil OK',response);
    })
    .catch(err => {
      console.log('Error Al Mostrar Perfil', err);
    })


    /*this.usersService.query().$promise
    .then(response=> {
      this.user = response;
      console.log('Perfil OK',response);
        this.$state.go("profile");
    })
    .catch(err => {
      console.log('Error Al Mostrar Perfil', err);
    })*/

  }
}

angular.module('socialSoccerApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
