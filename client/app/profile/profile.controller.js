'use strict';

(function(){

class ProfileComponent {
  constructor(usersService, $state,authService, $q,  Upload, API) {
    this.usersService = usersService;
    this.$state = $state;
    this.authService = authService;
    this.$q = $q;
    this.Upload = Upload;
    this.API = API;


    this.query = {
      limit:4,
      page:1
    };
  }

/*goUpdateResevations(idReservations){
  this.NavegateParams.setData('idReservations', idReservations);
}*/

  $onInit(){
    this.usersService.get({idUsers:this.authService.getIdUser()}).$promise
    .then(response=>{
      this.user = response;
      console.log('Perfil OK',response);
      console.log('usaurioasdfsd', this.user);
    })
    .catch(err => {
      console.log('Error Al Mostrar Perfil', err);
    })




  }
  create(from) {
      this.Upload.upload({
          url: this.API + '/api/upload/user',
          data: { file: this.file , idUser:this.authService.getIdUser()}
      }).then(function(resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          console.log('OK');
          location.reload();
      }, function(resp) {
          console.log('Error status: ' + resp.status);
      }, function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  }


}

angular.module('socialSoccerApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
