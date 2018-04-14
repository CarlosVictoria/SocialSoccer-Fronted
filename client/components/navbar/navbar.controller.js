'use strict';

class NavbarController {
  //start-non-standard
    ocultarCollapse(){
      $('.navbar-collapse').collapse('hide');
    }

  constructor(authService, $auth){
    this.authService = authService;
    this.$auth = $auth;
  }
  $onInit(){
    console.log(this.$auth.getPayload());
  }

  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

}

angular.module('socialSoccerApp')
  .controller('NavbarController', NavbarController);
