'use strict';

describe('Service: reservations', function () {

  // load the service's module
  beforeEach(module('socialSoccerApp'));

  // instantiate service
  var reservations;
  beforeEach(inject(function (_reservations_) {
    reservations = _reservations_;
  }));

  it('should do something', function () {
    expect(!!reservations).to.be.true;
  });

});
