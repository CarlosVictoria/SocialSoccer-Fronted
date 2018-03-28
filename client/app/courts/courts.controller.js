'use strict';

(function() {
    class CourtsComponent {
        constructor(soccerService,$stateParams) {
            this.soccerService = soccerService;
            this.$stateParams=$stateParams;
}

$onInit(){
console.log("canchas",this.$stateParams.id);
this.soccerService.query({establecimiento:this.$stateParams.id}).$promise
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
