'use strict';
(function(){

class UsersCreateComponent {
  constructor(usersService, documentTypesService, citiesService, departmentsService, $state) {
    this.usersService = usersService;
    this.documentTypesService = documentTypesService;
    this.citiesService = citiesService;
    this.departmentsService = departmentsService;
    this.$state = $state;
  }

  $onInit(){
    this.documentTypesService.query().$promise
    .then(response => {
      console.log('DOCTYPES OK',response);
      this.documentType = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

    this.departmentsService.query().$promise
    .then(response => {
      console.log('DEPARTMENT OK',response);
      this.department = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }

  createUser(){
    this.user.active = 1;
    console.log(this.user);
    this.usersService.save(this.user).$promise
    .then(response => {
      console.log('Usuario registrado correctamente',response);
      this.$state.go('login');
    })
    .catch(err =>{
      console.log('ERROR',err);
    });
  }

  getCities(){
    console.log(this.idDepartment);
    this.citiesService.getCities({idDepartment:this.idDepartment}).$promise
    .then(response => {
      console.log('GET CITIES', response);
      this.cities = response;
    })
    .catch(err => console.error(err));
  }
}
UsersCreateComponent.$inject = ['usersService','documentTypesService','citiesService','departmentsService','$state'];
angular.module('socialSoccerApp')
  .component('usersCreate', {
    templateUrl: 'app/users/users-create/users-create.html',
    controller: UsersCreateComponent,
    controllerAs:'vm'
  });

})();
