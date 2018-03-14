'use strict';

(function() {
    class CourtsComponent {
        constructor(soccerService, establishmentsService) {
            this.soccerService = soccerService;
            this.establishmentsService = establishmentsService;
}

$onInit(){
  this.establishmentsService.query().$promise
  .then(res=>{
    this.establecimientos=res;
    console.log(this.establecimientos);
  }).catch(err=>{
    console.log(err);
  })

this.soccerService.query({cancha:this.idEstablishments}).$promise
.then(res=>{
  this.soccerFields=res;
  console.log("canchas",this.soccerFields);
}).catch(err=>{
  console.log(err);
})

       }
    }

    angular.module('socialSoccerApp')
        .component('courts', {
            templateUrl: 'app/courts/courts.html',
            controller: CourtsComponent,
            controllerAs: 'vm'
        });

})();
