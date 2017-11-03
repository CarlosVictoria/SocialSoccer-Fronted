'use strict';

describe('Component: ReservationsComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var ReservationsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ReservationsComponent = $componentController('reservations', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
