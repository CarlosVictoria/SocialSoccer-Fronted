'use strict';

describe('Component: UsersCreateComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var UsersCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsersCreateComponent = $componentController('UsersCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
