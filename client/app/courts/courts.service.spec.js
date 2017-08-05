'use strict';

describe('Service: courts', function () {

  // load the service's module
  beforeEach(module('socialSoccerApp'));

  // instantiate service
  var courts;
  beforeEach(inject(function (_courts_) {
    courts = _courts_;
  }));

  it('should do something', function () {
    expect(!!courts).to.be.true;
  });

});
