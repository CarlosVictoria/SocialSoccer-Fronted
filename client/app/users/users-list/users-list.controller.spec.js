'use strict';

describe('Component: UsersListComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var UsersListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsersListComponent = $componentController('UsersListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
