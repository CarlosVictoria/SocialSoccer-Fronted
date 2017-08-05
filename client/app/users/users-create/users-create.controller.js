'use strict';
(function(){

class UsersCreateComponent {
  constructor(usersService) {
    this.usuariosService = usersService;
    this.user = {
      idTiposDocumentos:{
        idTiposDocumentos:null
      }
    };
  }

  createUser(){
    this.user.idTiposDocumentos.idTiposDocumentos = 1;
    this.user.activo = true;
    console.log(this.user);

    this.usuariosService.save(this.user).$promise
    .then(response => {
      console.log('Usuario registrado correctamente');
    })
    .catch(err =>{
      console.log('Error',err);
    });
  }
}
UsersCreateComponent.$inject = ['usersService'];
angular.module('socialSoccerApp')
  .component('usersCreate', {
    templateUrl: 'app/users/users-create/users-create.html',
    controller: UsersCreateComponent,
    controllerAs:'vm'
  });

})();
