'use strict';

(function() {

    class UsersUpdateComponent {
        constructor(usersService, $stateParams, $state) {
            this.usuariosService = usersService;
            this.$stateParams = $stateParams;
            this.$state = $state;
        }
        $onInit() {

            this.usuariosService.get({ id: this.$stateParams.idUsuario }).$promise
                .then(response => {
                    this.user = response;
                    console.log(this.user);
                })
                .catch(err =>
                    console.error(err));
        }

        updateUser() {
            this.usuariosService.update({ id: this.user.idUsuarios }, this.user).$promise
                .then(response => {
                    console.log("Usuario Actualizado")
                    this.$state.go('users-list');
                })
                .catch(err => console.error(err));
        }
    }

    UsersUpdateComponent.$inject = ['usersService','$stateParams','$state'];

    angular.module('socialSoccerApp')
        .component('usersUpdate', {
            templateUrl: 'app/users/users-update/users-update.html',
            controller: UsersUpdateComponent,
            controllerAs: 'vm'
        });

})();
