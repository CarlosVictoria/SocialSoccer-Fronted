'use strict';

class NavbarController {
  //start-non-standard

  constructor(authService){
    this.authService = authService;
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
