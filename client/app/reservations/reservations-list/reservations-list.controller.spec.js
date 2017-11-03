'use strict';

describe('Component: ReservationsListComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var ReservationsListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ReservationsListComponent = $componentController('reservations-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
