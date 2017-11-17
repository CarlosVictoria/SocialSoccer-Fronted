'use strict';

(function() {
class UsersUpdateComponent {
  constructor(usersService, citiesService, departmentsService, documentTypesService, $stateParams, $state) {
      this.usersService = usersService;
      this.documentTypesService = documentTypesService;
      this.citiesService = citiesService;
      this.departmentsService = departmentsService;
      this.$stateParams = $stateParams;
      this.$state = $state;
  }

  $onInit() {
    this.usersService.get({idUsers:this.$stateParams.idUsers}).$promise
    .then(response => {
        this.user = response;
        console.log(this.user);
    })
    .catch(err =>
        console.error(err));

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

  updateUser() {
    this.usersService.update({idUsers:this.user.idUsers},this.user).$promise
    .then(response => {
        console.log("Usuario Actualizado" );
        this.$state.go('profile');
    })
    .catch(err => console.error(err));
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

UsersUpdateComponent.$inject = ['usersService', 'citiesService','departmentsService',
'documentTypesService','$stateParams','$state'];

angular.module('socialSoccerApp')
    .component('usersUpdate', {
        templateUrl: 'app/users/users-update/users-update.html',
        controller: UsersUpdateComponent,
        controllerAs: 'vm'
    });

})();
